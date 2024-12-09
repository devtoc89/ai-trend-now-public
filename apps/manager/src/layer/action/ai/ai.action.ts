"use server";

import type { RetrieveAiItem } from "#layer/repository/ai-post/ai.post.repo";
import { retrieveAiPostItem, retrieveAiPostList } from "#layer/service/ai-post/ai.post.service";
import { generateAiAutoPost, generateAiPost } from "#layer/service/ai/ai.service";
import type { AiPostListGridItem } from "#types/viewModel/AiPostListGridItem";
import type { AiContentMeta } from "@repo/types/model/ai.model";
import { dateFormat } from "@repo/util/date/date.util";

function aiPostToViewItem(post: RetrieveAiItem) {
  return {
    id: post.id,
    insights: (post.metadata as AiContentMeta)?.insights,
    title: post.title,
    content: post.content,
    createdAt: dateFormat({ value: post.createdAt }),
    isPublished: post.isPublished,
  };
}

export async function getAiPostItemAction({ id }: { id: string }): Promise<AiPostListGridItem | null> {
  const itemRes = await retrieveAiPostItem({ id });
  if (!itemRes.success) {
    return null;
  }
  return itemRes.data ? aiPostToViewItem(itemRes.data) : null;
}

export async function getAiPostListAction({ page }: { page: number }): Promise<AiPostListGridItem[]> {
  const listRes = await retrieveAiPostList({ page });
  if (!listRes.success) {
    return [];
  }

  return listRes.data.map<AiPostListGridItem>((post) => aiPostToViewItem(post));
}
export async function generateAiPostAction({ id }: { id: string[] }) {
  if (id.length === 0) return { success: false, error: "No post selected" };
  return await generateAiPost(id);
}

export async function generateAiAutoPostAction() {
  return await generateAiAutoPost();
}
