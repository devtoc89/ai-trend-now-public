import { getUniqueItems } from "#layer/domain/crawl/common/common.services";
import { fetchOpenAiItem, fetchOpenAiList } from "#layer/domain/crawl/vendor/openai/openai.client";
import { parseOpenAiDetail, parseOpenAiList } from "#layer/domain/crawl/vendor/openai/openai.parser";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance";
import type {
  CrawlCommonParamsDTO,
  CrawlCommonResponseDTO,
  CreateManyOriginalPostListItemDTO,
} from "@repo/types/dto/crawl/common/common.crawl.dto";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";

type OpenAiListItem = {
  title: string;
  url: string;
};

async function fetchAndParseOpenAi(): Promise<ResponseTypeDTO<CreateManyOriginalPostListItemDTO[]>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(fetchAndParseOpenAi.name, async () => {
    const res = await fetchAndParseOpenAiListData();
    if (res.success) {
      const uniqueItems = await getUniqueItems(
        prisma,
        res.data.sort((a, b) => b.id.localeCompare(a.id)),
      );

      if (uniqueItems.length === 0) return [];

      return (
        await Promise.all(
          uniqueItems.map(async (listItem) => {
            const detailItem = await fetchAndParseOpenAiItemData(listItem);
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

async function fetchAndParseOpenAiListData() {
  return await serviceWrapper(fetchAndParseOpenAiListData.name, async () => {
    const listResponse = await fetchOpenAiList();
    if (!listResponse) throw new Error("No response from OpenAi API");
    return parseOpenAiList(listResponse);
  });
}

async function fetchAndParseOpenAiItemData(listItem: OpenAiListItem) {
  return await serviceWrapper(fetchAndParseOpenAiItemData.name, async () => {
    const detailResponse = await fetchOpenAiItem(listItem.url);
    if (!detailResponse) throw new Error("No response from OpenAi API");
    const parseResult = parseOpenAiDetail(detailResponse);
    if (!parseResult.content) throw new Error("No content from OpenAi API");
    return parseResult;
  });
}

/**
 * Crawl arxiv and persist crawled data to database.
 *
 * @param searchParam Search parameter for crawling arxiv.
 * @returns Promise that resolves to a success response with crawled data if successful, or an error response on failure.
 */
export async function getOpenAiCrawlData(_: CrawlCommonParamsDTO): Promise<ResponseTypeDTO<CrawlCommonResponseDTO>> {
  return await serviceWrapper(getOpenAiCrawlData.name, async () => {
    const listResponse = await fetchAndParseOpenAi();

    if (!listResponse.success) {
      throw new Error(`Failed to fetch or parse Arxiv data. Reason: ${listResponse.error}`);
    }
    const originalList = listResponse.data;

    return {
      meta: {
        source: "OpenAi",
        category: "news",
      },
      list: originalList.map<CreateManyOriginalPostListItemDTO>((v) => {
        return {
          ...v,
        };
      }),
    };
  });
}
