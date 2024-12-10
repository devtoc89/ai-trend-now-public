import { PAPER_ROOT_URL } from "#consts/global";
import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export const revalidate = 60;
export const runtime = "edge";

async function page() {
  return <PostListPage pageString="1" urlPath={PAPER_ROOT_URL} category={PostCategoryEnum.PAPER} />;
}

export default page;
