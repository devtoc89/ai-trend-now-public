import type {
  CrawlCommonParamsDTO,
  CrawlCommonResponseDTO,
  CreateManyOriginalPostListItemDTO,
} from "@repo/types/dto/crawl/common/common.crawl.dto";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
// import type {
//   CrawlCommonParamsDTO,
//   CrawlCommonResponseDTO,
//   CreateManyOriginalPostListItemDTO,
// } from "@repo/types/dto/enums/crawlStatus.enum";
import { getUniqueItems } from "#layer/domain/crawl/common/common.services";
import { fetchAiNewsItem, fetchAiNewsList } from "#layer/domain/crawl/news/ainews/ainews.client";
import { parseAiNewsDetail, parseAiNewsList } from "#layer/domain/crawl/news/ainews/ainews.parser";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance";

type AiNewsListItem = {
  title: string;
  url: string;
};

async function fetchAndParseAiNews(): Promise<ResponseTypeDTO<CreateManyOriginalPostListItemDTO[]>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(fetchAndParseAiNews.name, async () => {
    const res = await fetchAndParseAiNewsListData();
    if (res.success) {
      const uniqueItems = await getUniqueItems(
        prisma,
        res.data.sort((a, b) => b.id.localeCompare(a.id)),
      );

      if (uniqueItems.length === 0) return [];

      return (
        await Promise.all(
          uniqueItems.map(async (listItem) => {
            const detailItem = await fetchAndParseAiNewsItemData(listItem);
            if (!detailItem.success) return null;
            return {
              ...listItem,
              ...detailItem.data,
            };
          }),
        )
      ).filter((v) => !!v);
    }
    return [];
  });
}

async function fetchAndParseAiNewsListData() {
  return await serviceWrapper(fetchAndParseAiNewsListData.name, async () => {
    const listResponse = await fetchAiNewsList();
    if (!listResponse) throw new Error("No response from AiNews API");
    return parseAiNewsList(listResponse);
  });
}

async function fetchAndParseAiNewsItemData(listItem: AiNewsListItem) {
  return await serviceWrapper(fetchAndParseAiNewsItemData.name, async () => {
    const detailResponse = await fetchAiNewsItem(listItem.url);
    if (!detailResponse) throw new Error("No response from AiNews API");
    const parseResult = parseAiNewsDetail(detailResponse);
    if (!parseResult.content) throw new Error("No content from AiNews API");
    return parseResult;
  });
}

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
export async function getAiNewsCrawlData(_: CrawlCommonParamsDTO): Promise<ResponseTypeDTO<CrawlCommonResponseDTO>> {
  return await serviceWrapper(getAiNewsCrawlData.name, async () => {
    const listResponse = await fetchAndParseAiNews();

    if (!listResponse.success) {
      throw new Error(`Failed to fetch or parse AiNews data. Reason: ${listResponse.error}`);
    }
    const originalList = listResponse.data;

    return {
      meta: {
        source: "AiNews",
        category: PostCategoryEnum.NEWS,
      },
      list: originalList.map<CreateManyOriginalPostListItemDTO>((v) => {
        return {
          ...v,
        };
      }),
    };
  });
}
