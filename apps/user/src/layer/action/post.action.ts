"use server";

import {
  type RetrievePostItem,
  retrievePostItem,
  retrievePostList,
  retrievePostTotalCount,
} from "#layer/service/post.service";
import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import type { AiContentExt, AiContentMeta } from "@repo/types/model/ai.model";
import { unstable_cache } from "next/cache";

export type PostListViewList = Omit<AiContentExt, "isError" | "content" | "metadata"> & {
  id: string;
  createdAt: string;
};

export type PostItemViewItem = Omit<AiContentExt, "isError"> & {
  id: string;
  createdAt: string;
};

function postItemToViewItem(post: RetrievePostItem): PostItemViewItem {
  return {
    id: post.id,
    title: post.postDetail?.title || "",
    content: (post.postDetail?.content || "")
      .replace(/\)(\*{1,3})/g, ")$1 ")
      // .replace(/(\n+)/g, "\n")
      // .replace(/\n\s\n\s/gi, "\n\n&nbsp;\n\n")
      // .replace(/\*\*/gi, "@$_%!\^")
      // .replace(/\**\*/gi, "/")
      // .replace(/@\$_%!\^/gi, "**")
      // .replace(/<\/?u>/gi, "*")
      .replaceAll("<br>", "\n"),
    metadata: (post.postMeta?.metadata as AiContentMeta) || undefined,
    summary: post.postDetail?.summary || "",
    createdAt: post.createdAt.toISOString(),
  };
}

function postListToViewList(post: RetrievePostItem): PostListViewList {
  return {
    id: post.id,
    title: post.postDetail?.title || "",
    summary: post.postDetail?.summary || "",
    createdAt: post.createdAt.toISOString(),
  };
}

export async function getPostItemAction({ id }: { id: string }): Promise<PostItemViewItem | null> {
  const resItem = await retrievePostItem({ id });
  if (!resItem.success) {
    return null;
  }

  return postItemToViewItem(resItem.data);
}

export async function getPostListAction({
  page,
  pageSize,
  category,
}: { page: number; pageSize: number; category: PostCategoryEnum }): Promise<PostListViewList[]> {
  const listRes = await retrievePostList({ category, page, pageSize });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<PostListViewList>(postListToViewList);
}
export async function getPostTotalCountAction({ category }: { category: PostCategoryEnum }): Promise<number> {
  const contRes = await retrievePostTotalCount({ category });
  if (!contRes.success) {
    return 1;
  }

  return contRes.data;
}

export const getPostListActionCache = async (category: PostCategoryEnum, page: number, pageSize: number) => {
  const { list } = await getPostListAndCountActionCache(category, page, pageSize);
  return list;
};

export const getPostTotalCountActionCache = async (category: PostCategoryEnum, page: number, pageSize: number) => {
  const { totalCount } = await getPostListAndCountActionCache(category, page, pageSize);
  return totalCount;
};

export const getPostListAndCountActionCache = unstable_cache(
  async (category: PostCategoryEnum, page: number, pageSize: number) => ({
    list: await getPostListAction({ category, page, pageSize }),
    totalCount: await getPostTotalCountAction({ category }),
  }),
  [`${getPostListAction.name}_${getPostTotalCountAction.name}`],
  {
    revalidate: 60,
  },
);

export const getPostItemActionCache = unstable_cache(
  async (id) => await getPostItemAction({ id }),
  [getPostItemAction.name],
  {
    revalidate: 60,
  },
);
