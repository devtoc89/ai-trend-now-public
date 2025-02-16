"use server";

import { dateFormat } from "@repo/util/date/date.util";
import { doAuthInAction } from "#layer/action/auth/auth.action";
import {
  retrieveNewPostList,
  retrieveSelectedPostList,
  updatePostStatus,
} from "#layer/service/original-post/original.post.service";
import type { NewPostListGridItem } from "#types/viewModel/NewPostListGridItem";
import type { SelectedPostListGridItem } from "#types/viewModel/SelectedPostListGridItem";

//TODO: cache.
//TODO: error handling in UI

export async function getNewPostListAction({ page }: { page: number }): Promise<NewPostListGridItem[]> {
  await doAuthInAction();
  const listRes = await retrieveNewPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<NewPostListGridItem>((post) => ({
    id: post.id,
    category: post.originalPostMeta?.category || "",
    source: post.originalPostMeta?.source || "",
    title: post.originalPostSource?.title || "",
    content: post.originalPostSource?.content || "",
    orgCreateAt: dateFormat({ value: post.originalPostMeta?.orgCreatedAt }),
    createdAt: dateFormat({ value: post.originalPostSource?.createdAt }),
    url: post.originalPostMeta?.url || "",
    isSelected: !!post.originalPostStatus?.selectedFlg,
  }));
}

export async function getSelectedPostListAction({ page }: { page: number }): Promise<SelectedPostListGridItem[]> {
  await doAuthInAction();
  const listRes = await retrieveSelectedPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<SelectedPostListGridItem>((post) => ({
    id: post.id,
    category: post.originalPostMeta?.category || "",
    source: post.originalPostMeta?.source || "",
    title: post.originalPostSource?.title || "",
    content: post.originalPostSource?.content || "",
    orgCreateAt: dateFormat({ value: post?.originalPostMeta?.orgCreatedAt }),
    createdAt: dateFormat({ value: post?.originalPostSource?.createdAt }),
    url: post.originalPostMeta?.url || "",
  }));
}

export async function changeNewPostStatusAction(id: string, selectedFlg: boolean) {
  await doAuthInAction();
  return await updatePostStatus({ id, selectedFlg });
}
