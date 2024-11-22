import { createId } from "@paralleldrive/cuid2";
import type { Prisma } from "@prisma/client";
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

// const fetchAndParseArxivData = serviceWrapper("fetchAndParseArxivData", async);

// type CrawlArxivAndPersistResponse = CrawlBase & {
//   originalPostBase: Array<OriginalPostBase & { originalPostSource: Array<OriginalPostSource> }>;
// };

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
    "crawlArxivAndPersist",
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
      for (const entries of esToolkit.chunk(missingEntries, 50)) {
        await prisma.$transaction(async (tx) => {
          await Promise.all(entries.map((entry) => createPostWithSource(tx, entry, crawlId)));
          await crawlComplete(tx, crawlId, startTime);
        });
      }

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
 * Creates a post with its associated source in the database.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param entry - The parsed entry data from Arxiv containing post details.
 * @param crawlId - The ID of the crawl session associated with this post creation.
 * @returns The created post record.
 */
async function createPostWithSource(tx: Prisma.TransactionClient, entry: CrawlArxivParsedEntryDTO, crawlId: string) {
  const createdAt = getCurrentTimeISOString();
  const post = await tx.originalPostBase.create({
    data: {
      id: entry.id,
      crawlId,
      createdAt,
      originalPostSource: {
        create: {
          id: createId(),
          url: entry.id,
          title: entry.title,
          content: entry.summary,
          orgCreatedAt: entry.published,
          orgUpdatedAt: entry.updated,
          createdAt,
        },
      },
      originalPostMeta: {
        create: {
          id: createId(),
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
        },
      },
    },
  });
  return post;
}
