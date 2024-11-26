"use server";

import {
  type RetrieveAiItem,
  generateAiAutoPost,
  generateAiPost,
  retrieveAiPostItem,
  retrieveAiPostList,
} from "#layer/domain/ai/ai.service.ts";
import type { AiPostListGridItemType } from "#layer/ui/components/private/Grid/AiPostListGrid.tsx";
import { dateFormat } from "@repo/util/date/date.util.ts";

//TODO: cache.
//TODO: error handling in UI

function aiPostToViewItem(post: RetrieveAiItem) {
  return {
    id: post.id,
    insights: post.insights,
    title: post.title,
    content: post.content,
    createdAt: dateFormat({ value: post.createdAt }),
    isPosted: !!post.postBase,
  };
}

export async function getAiPostItemAction({ id }: { id: string }): Promise<AiPostListGridItemType | null> {
  const itemRes = await retrieveAiPostItem({ id });
  if (!itemRes.success) {
    return null;
  }
  return itemRes.data ? aiPostToViewItem(itemRes.data) : null;
}

export async function getAiPostListAction({ page }: { page: number }): Promise<AiPostListGridItemType[]> {
  const listRes = await retrieveAiPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<AiPostListGridItemType>((post) => aiPostToViewItem(post));
}
export async function generateAiPostAction({ id }: { id: string[] }) {
  if (id.length === 0) return { success: false, error: "No post selected" };
  return await generateAiPost(id);
}

export async function generateAiAutoPostAction() {
  return await generateAiAutoPost();
}
