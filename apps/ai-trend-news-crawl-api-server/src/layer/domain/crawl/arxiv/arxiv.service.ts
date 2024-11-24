import { createId } from "@paralleldrive/cuid2";
import type { PrismaClient } from "@prisma/client";
import type {
  CrawlArxivParsedDTO,
  CrawlArxivParsedEntryDTO,
  CrawlArxivSearchParamsDTO,
} from "@repo/types/dto/crawl/arxiv/index.dto.ts";
import esToolkit from "es-toolkit";
import { fetchArxiv } from "#layer/domain/crawl/arxiv/arxiv.client.ts";
import { arxivClientResponseParser } from "#layer/domain/crawl/arxiv/arxiv.parser.ts";
import { crawlComplete, handleCrawlError } from "#lib/helper/crawler/crawler.helper.ts";
import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { getMissingItems } from "#lib/utils/collection/collection.util.ts";
import { getCurrentTimeISOString, getElapsedTime } from "#lib/utils/date/date.util.ts";
import { CrawlStatus } from "#types/enums/crawlStatus.enum.ts";
import type { ResponseType } from "#types/response/response.type.ts";

// TODO: callback 구조를 통해 후속 작업 확장 가능성 제공
// TODO: Prisma 스키마 확장 시 source 필드 추가 검토
// TODO: Crawl 결과에 건수

/**
 * Fetches and parses data from the Arxiv API using the provided search parameters.
 *
 * @param searchParam - The search parameters used to query the Arxiv API.
 * @returns A promise that resolves to a success response with parsed Arxiv data,
 *          or an error response if the fetching or parsing fails.
 */
export async function fetchAndParseArxivData(
  searchParam: CrawlArxivSearchParamsDTO,
): Promise<ResponseType<CrawlArxivParsedDTO>> {
  return await serviceWrapper("fetchAndParseArxivData", async () => {
    const response = await fetchArxiv(searchParam);
    if (!response) throw new Error("No response from API");
    return arxivClientResponseParser(response);
  });
}

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
export async function crawlArxivAndPersist(searchParam: CrawlArxivSearchParamsDTO) {
  const crawlId = createId();
  const prisma = getPrismaClient();
  const startTime = new Date();

  return await serviceWrapper(
    crawlArxivAndPersist.name,
    async () => {
      const pCrawlBase = prisma.crawlBase.create({
        data: { id: crawlId, crawlTime: 0, createdAt: startTime.toISOString(), status: CrawlStatus.IN_PROGRESS },
      });

      const pArxivData = fetchAndParseArxivData(searchParam);

      const [_, arxivData] = await Promise.all([pCrawlBase, pArxivData]);

      if (!arxivData.success) {
        throw new Error(`Failed to fetch or parse Arxiv data. Reason: ${arxivData.error}`);
      }
      if (!arxivData.data.feed.entry) {
        await crawlComplete(prisma, crawlId, startTime);
        return {
          success: true,
          data: undefined,
        };
      }
      const entries = arxivData.data.feed.entry?.sort((a, b) => b.id.localeCompare(a.id)) || [];
      const existingRecords = await prisma.originalPostBase.findMany({
        where: {
          id: {
            in: entries.map((v) => v.id),
          },
        },
        select: {
          id: true,
        },
        orderBy: {
          id: "desc",
        },
      });

      const missingEntries = getMissingItems(entries, existingRecords);
      await createManyPostWithSource(prisma, missingEntries, crawlId);
      await crawlComplete(prisma, crawlId, startTime, missingEntries.length);

      return "completed";
    },
    async () => {
      await handleCrawlError({
        crawlId,
        startTime,
      });
    },
  );
}

const etcKey: Array<keyof CrawlArxivParsedEntryDTO> = ["author", "arxiv:primary_category", "arxiv:comment"];

/**
 * Creates multiple posts with their sources and meta in a single transaction.
 * @param prisma The Prisma client instance.
 * @param entries The list of parsed arxiv entries.
 * @param crawlId The crawl ID.
 */
async function createManyPostWithSource(prisma: PrismaClient, entries: CrawlArxivParsedEntryDTO[], crawlId: string) {
  const createdAt = getCurrentTimeISOString();

  await prisma.$transaction(async (tx) => {
    // 1 base
    await tx.originalPostBase.createMany({
      data: entries.map((entry) => ({ id: entry.id, crawlId, createdAt })),
    });
    await Promise.all([
      // 2. source
      tx.originalPostSource.createMany({
        data: entries.map((entry) => ({
          id: createId(),
          postId: entry.id,
          url: entry.id,
          title: entry.title,
          content: entry.summary,
          orgCreatedAt: entry.published,
          orgUpdatedAt: entry.updated,
          createdAt,
        })),
      }),
      // 3. meta
      tx.originalPostMeta.createMany({
        data: entries.map((entry) => ({
          id: createId(),
          postId: entry.id,
          source: "arxiv",
          category: "paper",
          etc: JSON.stringify(
            etcKey.reduce<Partial<CrawlArxivParsedEntryDTO>>((pv, cv) => {
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              (pv as any)[cv] = entry[cv];
              return pv;
            }, {}),
          ),
          createdAt,
        })),
      }),
      // 4. status
      await tx.originalPostStatus.createMany({
        data: entries.map((entry) => ({
          id: createId(),
          postId: entry.id,
          createdAt,
        })),
      }),
    ]);
  });
}
