import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { autoPublishByCategory } from "#layer/service/publish/publish.service";

export async function POST(req: Request) {
  const batchKey = req.headers.get("X-BATCH-AUTH-KEY");

  if (batchKey !== process.env.BATCH_KEY) {
    return new Response("{}", {
      status: 403,
    });
  }

  const { postCategoryList, aiPostCategory } = (await req.json()) as {
    postCategoryList: PostCategoryEnum[];
    aiPostCategory: PostCategoryEnum;
  };
  const res = await autoPublishByCategory(postCategoryList, aiPostCategory);
  if (res.success) {
    return new Response(JSON.stringify(res), {
      status: 201,
    });
  }
  return new Response(JSON.stringify(res), {
    status: 500,
  });
}
