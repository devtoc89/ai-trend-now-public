import { createId } from "@paralleldrive/cuid2";

import type { CrawlBase, OriginalPostBase, OriginalPostSource, Prisma } from "@prisma/client";
import type {
  CrawlArxivParsedDTO,
  CrawlArxivParsedEntryDTO,
  CrawlArxivSearchParamsDTO,
} from "@repo/types/dto/crawl/arxiv/index.dto.ts";
import { CrawlStatus } from "#enums/crawlStatus.enum.ts";
import { crawlComplete, handleCrawlError } from "#helper/crawler/helper.crawler.ts";
import { fetchArxiv } from "#layer/crawl/arxiv/arxiv.client.ts";
import { arxivClientResponseParser } from "#layer/crawl/arxiv/arxiv.parser.ts";
import { handleServiceError } from "#layer/global/error/error.handler.ts";
import { getPrismaClient } from "#lib/prisma/prisma.instance.ts";
import { getMissingItems } from "#utils/collection/collection.util.ts";
import { getCurrentTimeISOString, getElapsedTime } from "#utils/date/date.util.ts";

// TODO: callback 구조를 통해 후속 작업 확장 가능성 제공
// TODO: Prisma 스키마 확장 시 source 필드 추가 검토
// TODO: Crawl 결과에 건수
type ResponseType<T> = { success: true; data: T } | { success: false; error: string };

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
  try {
    const response = await fetchArxiv(searchParam);
    if (!response) throw new Error("No response from API");
    return { success: true, data: arxivClientResponseParser(response) };
  } catch (err: unknown) {
    const error = err as Error;
    void handleServiceError(error as Error, "retrieveArxivJSON");
    return { success: false, error: error.message };
  }
}

type CrawlArxivAndPersistResponse = CrawlBase & {
  originalPostBase: Array<OriginalPostBase & { originalPostSource: Array<OriginalPostSource> }>;
};

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
export async function crawlArxivAndPersist(
  searchParam: CrawlArxivSearchParamsDTO,
): Promise<ResponseType<CrawlArxivAndPersistResponse | undefined>> {
  // TODO: ID 고도화
  const crawlId = createId();
  const prisma = getPrismaClient();
  const startTime = new Date();
  try {
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
    const entries = arxivData.data.feed.entry?.sort() || [];
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

    await prisma.$transaction(async (tx) => {
      await Promise.all(missingEntries.map((entry) => createPostWithSource(tx, entry, crawlId)));
      await crawlComplete(tx, crawlId, startTime);
    });

    const res = await prisma.crawlBase.findFirst({
      where: { id: crawlId },
      include: {
        originalPostBase: {
          include: {
            originalPostSource: true,
          },
        },
      },
    });

    if (!res) throw new Error("data persist failed");

    return {
      success: true,
      data: res,
    };
  } catch (err) {
    const error = err as Error;
    await handleCrawlError({
      crawlId,
      startTime,
      error: error as Error,
      context: "crawlArxivAndPersist",
    });
    return { success: false, error: error.message };
  }
}

/**
 * Creates a post with its associated source in the database.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param entry - The parsed entry data from Arxiv containing post details.
 * @param crawlId - The ID of the crawl session associated with this post creation.
 * @returns The created post record.
 */
async function createPostWithSource(tx: Prisma.TransactionClient, entry: CrawlArxivParsedEntryDTO, crawlId: string) {
  const post = await tx.originalPostBase.create({
    data: {
      id: entry.id,
      vendor: "arxiv",
      crawlId,
      createdAt: getCurrentTimeISOString(),
      originalPostSource: {
        create: {
          id: createId(),
          category: "paper",
          url: entry.id,
          title: entry.title,
          content: entry.summary,
          createdAt: getCurrentTimeISOString(),
        },
      },
    },
  });
  return post;
}
