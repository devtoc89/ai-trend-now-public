import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export async function arxivAiPostJob() {
  if (!process.env.BATCH_KEY) throw new Error("No BatchKey");
  const res = await fetch(`${process.env.MANAGER_SERVER_URL}/api/post/publish`, {
    method: "post",
    body: JSON.stringify({
      postCategoryList: [PostCategoryEnum.PAPER],
      aiPostCategory: PostCategoryEnum.PAPER,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-BATCH-AUTH-KEY": process.env.BATCH_KEY,
    },
  });
  return JSON.stringify(await res.json()).substring(0, 100);
}
