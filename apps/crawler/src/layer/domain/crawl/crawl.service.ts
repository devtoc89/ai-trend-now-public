import { getTechCrunchCrawlData } from "#layer/domain/crawl/news/techcrunch/techcrunch.service.ts";
import { getArxivCrawlData } from "#layer/domain/crawl/scholar/arxiv/arxiv.service.ts";
import { crawlComplete, handleCrawlError } from "#lib/helper/crawler/crawler.helper.ts";
import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { CrawlStatus } from "#types/enums/crawlStatus.enum.ts";
import { createId } from "@paralleldrive/cuid2";
import type { PrismaClient } from "@repo/prisma-manager";
import type {
  CrawlCommonParamsDTO,
  CrawlCommonResponseDTO,
  CreateManyOriginalPostListItemDTO,
  CreateOriginalPostCommonMetaDTO,
} from "@repo/types/dto/crawl/common/common.crawl.dto.ts";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto.ts";
import { getCurrentTimeISOString } from "@repo/util/date/date.util.ts";
import { isKeyOf } from "@repo/util/property/object.util.ts";

async function createManyOriginalPostWithSource(
  prisma: PrismaClient,
  meta: CreateOriginalPostCommonMetaDTO,
  resultList: CreateManyOriginalPostListItemDTO[],
  crawlId: string,
) {
  return await serviceWrapper(createManyOriginalPostWithSource.name, async () => {
    const createdAt = getCurrentTimeISOString();

    await prisma.$transaction(async (tx) => {
      // 1 base
      await tx.originalPostBase.createMany({
        data: resultList.map((entry) => ({ id: entry.id, crawlId, createdAt })),
        skipDuplicates: true,
      });
      await Promise.all([
        // 2. source
        tx.originalPostSource.createMany({
          data: resultList.map((entry) => ({
            id: createId(),
            postId: entry.id,
            title: entry.title,
            content: entry.content,
            url: entry.url,
            orgCreatedAt: entry.orgCreatedAt,
            orgUpdatedAt: entry.orgUpdatedAt,
            createdAt,
          })),
        }),
        // 3. meta
        tx.originalPostMeta.createMany({
          data: resultList.map((entry) => ({
            id: createId(),
            postId: entry.id,
            category: meta.category,
            source: meta.source,
            etc: entry.etc,
            createdAt,
          })),
        }),
        // 4. status
        await tx.originalPostStatus.createMany({
          data: resultList.map((entry) => ({
            id: createId(),
            postId: entry.id,
            createdAt,
          })),
        }),
      ]);
    });
  });
}

async function crawlResultPersist(
  prisma: PrismaClient,
  pCrawlResult: Promise<ResponseTypeDTO<CrawlCommonResponseDTO>>,
  crawlId: string,
) {
  return await serviceWrapper(crawlResultPersist.name, async () => {
    const crawlResult = await pCrawlResult;
    if (!crawlResult.success) return 0;

    const res = await createManyOriginalPostWithSource(prisma, crawlResult.data.meta, crawlResult.data.list, crawlId);
    return res.success ? crawlResult.data.list.length : 0;
  });
}

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
async function crawlResultListPersist(pCrawlResultList: Promise<ResponseTypeDTO<CrawlCommonResponseDTO>>[]) {
  const crawlId = createId();
  const prisma = getPrismaClient();
  const startTime = new Date();

  return await serviceWrapper(
    crawlResultPersist.name,
    async () => {
      await prisma.crawlBase.create({
        data: { id: crawlId, crawlTime: 0, createdAt: startTime.toISOString(), status: CrawlStatus.IN_PROGRESS },
      });

      const resList = await Promise.all(pCrawlResultList.map((v) => crawlResultPersist(prisma, v, crawlId)));

      await crawlComplete(
        prisma,
        crawlId,
        startTime,
        resList
          .filter((v) => !!v.success)
          .map((v) => v.data)
          .reduce((a, b) => a + b, 0),
      );
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

const crawlFnMap = {
  all: [getArxivCrawlData, getTechCrunchCrawlData],
  arxiv: [getArxivCrawlData],
  techcrunch: [getTechCrunchCrawlData],
};

export async function crawlAndPersist(searchParam: CrawlCommonParamsDTO): Promise<ResponseTypeDTO<string>> {
  return await serviceWrapper(crawlAndPersist.name, async () => {
    if (isKeyOf(searchParam.source, crawlFnMap)) {
      const crawlFns = crawlFnMap[searchParam.source];
      const res = await crawlResultListPersist(crawlFns.map((fn) => fn(searchParam)));
      if (!res.success) throw new Error(res.error);
      return res.data;
    }
    return "source is not required";
  });
}
