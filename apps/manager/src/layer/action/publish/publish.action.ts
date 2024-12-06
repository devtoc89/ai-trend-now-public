"use server";

import { publishAiPost } from "#layer/service/publish/publish.service";

//TODO: cache.
//TODO: error handling in UI

export async function publishAiPostAction(id: string) {
  return await publishAiPost(id.trim());
}
