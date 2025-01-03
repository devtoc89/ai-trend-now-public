import { NEWS_PAGE_SIZE } from "#consts/global";
import { getPostListAndCountActionCache } from "#layer/action/post.action";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { range } from "es-toolkit";
import type { MetadataRoute } from "next/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { totalCount } = await getPostListAndCountActionCache(PostCategoryEnum.PAPER, 0, NEWS_PAGE_SIZE);
  const pageCnt = Math.ceil(totalCount / NEWS_PAGE_SIZE);
  const sitemapFromPosts: MetadataRoute.Sitemap = range(1, pageCnt + 1).map((page) => {
    return {
      url: `https://ai-trend-now.stream/post/paper/page/${page}`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.5,
    };
  });
  return [...sitemapFromPosts];
}
