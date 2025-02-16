"use server";

import { dateFormat } from "@repo/util/date/date.util";
import { doAuthInAction } from "#layer/action/auth/auth.action";
import { retrievePostList } from "#layer/service/post/post.service";
import type { PostListGridItem } from "#types/viewModel/PostListGridItem";

//TODO: cache.
//TODO: error handling in UI

export async function getPostListAction({ page }: { page: number }): Promise<PostListGridItem[]> {
  await doAuthInAction();
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
