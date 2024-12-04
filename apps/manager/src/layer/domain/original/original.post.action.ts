"use server";

import {
  retrieveNewPostList,
  retrieveSelectedPostList,
  updatePostStatus,
} from "#layer/domain/original/original.post.service";
import type { NewPostListGridItemType } from "#layer/ui/components/private/Grid/NewPostListGrid";
import type { SelectedPostListGridItemType } from "#layer/ui/components/private/Grid/SelectedPostListGrid";
import { dateFormat } from "@repo/util/date/date.util";

//TODO: cache.
//TODO: error handling in UI

export async function getNewPostListAction({ page }: { page: number }): Promise<NewPostListGridItemType[]> {
  const listRes = await retrieveNewPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<NewPostListGridItemType>((post) => ({
    id: post.id,
    category: post.originalPostMeta?.category || "",
    source: post.originalPostMeta?.source || "",
    title: post.originalPostSource?.title || "",
    content: post.originalPostSource?.content || "",
    orgCreateAt: dateFormat({ value: post.originalPostSource?.orgCreatedAt }),
    createdAt: dateFormat({ value: post.originalPostSource?.createdAt }),
    url: post.originalPostSource?.url || "",
    isSelected: !!post.originalPostStatus?.selectedFlg,
  }));
}

export async function getSelectedPostListAction({ page }: { page: number }): Promise<SelectedPostListGridItemType[]> {
  const listRes = await retrieveSelectedPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<SelectedPostListGridItemType>((post) => ({
    id: post.id,
    category: post.originalPostMeta?.category || "",
    source: post.originalPostMeta?.source || "",
    title: post.originalPostSource?.title || "",
    content: post.originalPostSource?.content || "",
    orgCreateAt: dateFormat({ value: post?.originalPostSource?.orgCreatedAt }),
    createdAt: dateFormat({ value: post?.originalPostSource?.createdAt }),
    url: post.originalPostSource?.url || "",
  }));
}

export async function changeNewPostStatusAction(id: string, selectedFlg: boolean) {
  return await updatePostStatus({ id, selectedFlg });
}
