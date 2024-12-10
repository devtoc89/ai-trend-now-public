import { PAPER_ROOT_URL } from "#consts/global";
import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export const revalidate = 180;
export const dynamicParams = true;
export const runtime = "edge";
async function page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  return <PostListPage pageString={(await params).page} urlPath={PAPER_ROOT_URL} category={PostCategoryEnum.PAPER} />;
}

export default page;
