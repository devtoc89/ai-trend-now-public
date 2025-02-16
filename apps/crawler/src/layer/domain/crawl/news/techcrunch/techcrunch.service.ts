import { getUniqueItems } from "#layer/domain/crawl/common/common.services";
import { fetchTechCrunchItem, fetchTechCrunchList } from "#layer/domain/crawl/news/techcrunch/techcrunch.client";
import { parseTechcrunchDetail, parseTechcrunchList } from "#layer/domain/crawl/news/techcrunch/techcrunch.parser";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance";
import type {
  CrawlCommonParamsDTO,
  CrawlCommonResponseDTO,
  CreateManyOriginalPostListItemDTO,
} from "@repo/types/dto/crawl/common/common.crawl.dto";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

type TechCrunchListItem = {
  title: string;
  url: string;
};

async function fetchAndParseTechCrunch(): Promise<ResponseTypeDTO<CreateManyOriginalPostListItemDTO[]>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(fetchAndParseTechCrunch.name, async () => {
    const res = await fetchAndParseTechCrunchListData();
    if (res.success) {
      const uniqueItems = await getUniqueItems(
        prisma,
        res.data.sort((a, b) => b.id.localeCompare(a.id)),
      );

      if (uniqueItems.length === 0) return [];

      return (
        await Promise.all(
          uniqueItems.map(async (listItem) => {
            const detailItem = await fetchAndParseTechCrunchItemData(listItem);
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

async function fetchAndParseTechCrunchListData() {
  return await serviceWrapper(fetchAndParseTechCrunchListData.name, async () => {
    const listResponse = await fetchTechCrunchList();
    if (!listResponse) throw new Error("No response from TechCrunch API");
    return parseTechcrunchList(listResponse);
  });
}

async function fetchAndParseTechCrunchItemData(listItem: TechCrunchListItem) {
  return await serviceWrapper(fetchAndParseTechCrunchItemData.name, async () => {
    const detailResponse = await fetchTechCrunchItem(listItem.url);
    if (!detailResponse) throw new Error("No response from TechCrunch API");
    const parseResult = parseTechcrunchDetail(detailResponse);
    if (!parseResult.content) throw new Error("No content from TechCrunch API");
    return parseResult;
  });
}

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
export async function getTechCrunchCrawlData(
  _: CrawlCommonParamsDTO,
): Promise<ResponseTypeDTO<CrawlCommonResponseDTO>> {
  return await serviceWrapper(getTechCrunchCrawlData.name, async () => {
    const listResponse = await fetchAndParseTechCrunch();

    if (!listResponse.success) {
      throw new Error(`Failed to fetch or parse techcrunch data. Reason: ${listResponse.error}`);
    }
    const originalList = listResponse.data;

    return {
      meta: {
        source: "techcrunch",
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
