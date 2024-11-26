"use server";

import { publishAiPost } from "#layer/domain/publish/publish.service.ts";

//TODO: cache.
//TODO: error handling in UI

export async function publishAiPostAction(id: string) {
  return await publishAiPost({ aiPostId: id.trim() });
}
