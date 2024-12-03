"use server";

import {
  type RetrievePostItem,
  retrievePostItem,
  retrievePostList,
  retrievePostTotalCount,
} from "#layer/domain/post/post.service.ts";
import { unstable_cache } from "next/cache";

type PostListViewItemMetadata = {
  insights: Array<string>;
  keywords: Array<string>;
  imageGeneratePrompt: string;
  references: Array<{
    category: string;
    title: string;
    source: string;
    url: string;
  }>;
};

export type PostListViewList = {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
};

export type PostItemViewItem = {
  id: string;
  title: string;
  content: string;
  summary: string;
  metadata?: PostListViewItemMetadata;
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
    metadata: (post.postMeta?.metadata as PostListViewItemMetadata) || undefined,
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
}: { page: number; pageSize: number }): Promise<PostListViewList[]> {
  const listRes = await retrievePostList({ page, pageSize });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<PostListViewList>(postListToViewList);
}
export async function getPostTotalCountAction(): Promise<number> {
  const contRes = await retrievePostTotalCount();
  if (!contRes.success) {
    return 1;
  }

  return contRes.data;
}

export const getPostListActionCache = unstable_cache(
  async (page: number, pageSize: number) => await getPostListAction({ page, pageSize }),
  [getPostListAction.name],
  {
    revalidate: 60,
  },
);

export const getPostTotalCountActionCache = unstable_cache(
  async () => await getPostTotalCountAction(),
  [getPostTotalCountAction.name],
  {
    revalidate: 60,
  },
);

export const getPostListAndCountActionCache = unstable_cache(
  async (page: number, pageSize: number) => ({
    list: await getPostListAction({ page, pageSize }),
    totalCount: await getPostTotalCountAction(),
  }),
  [`${getPostListAction.name}_${getPostTotalCountAction.name}`],
  {
    revalidate: 60,
  },
);
