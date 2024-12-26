"use server";

import { doAuthInAction } from "#layer/action/auth/auth.action";
import { publishAiPost } from "#layer/service/publish/publish.service";

//TODO: cache.
//TODO: error handling in UI

export async function publishAiPostAction(id: string) {
  await doAuthInAction();
  return await publishAiPost(id.trim());
}
