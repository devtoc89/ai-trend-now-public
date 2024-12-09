import { autoPublishByCategory } from "#layer/service/publish/publish.service";
import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export async function POST(req: Request) {
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
