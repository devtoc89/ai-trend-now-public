import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
export const revalidate = 180;
export const dynamicParams = true;

async function page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  return <PostListPage pageString={(await params).page} urlPath="/post/column/" category={PostCategoryEnum.COLUMN} />;
}

export default page;
