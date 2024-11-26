"use server";

import { retrievePostList } from "#layer/domain/post/post.service.ts";
import type { PostListGridItemType } from "#layer/ui/components/private/Grid/PostListGrid.tsx";
import { dateFormat } from "@repo/util/date/date.util.ts";

//TODO: cache.
//TODO: error handling in UI

export async function getPostListAction({ page }: { page: number }): Promise<PostListGridItemType[]> {
  const listRes = await retrievePostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<PostListGridItemType>((post) => ({
    id: post.id,
    title: post.postDetail?.title || "",
    content: post.postDetail?.content || "",
    metadata: (post.postMeta?.metadata as Record<string, string>) || {},
    createdAt: dateFormat({ value: post.createdAt }),
  }));
}
