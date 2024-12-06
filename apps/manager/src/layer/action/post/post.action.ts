"use server";

import { retrievePostList } from "#layer/service/post/post.service";
import type { PostListGridItem } from "#types/viewModel/PostListGridItem";
import { dateFormat } from "@repo/util/date/date.util";

//TODO: cache.
//TODO: error handling in UI

export async function getPostListAction({ page }: { page: number }): Promise<PostListGridItem[]> {
  const listRes = await retrievePostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<PostListGridItem>((post) => ({
    id: post.id,
    title: post.postDetail?.title || "",
    content: post.postDetail?.content || "",
    metadata: (post.postMeta?.metadata as Record<string, string>) || {},
    createdAt: dateFormat({ value: post.createdAt }),
  }));
}
