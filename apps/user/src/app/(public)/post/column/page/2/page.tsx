import { COLUMN_ROOT_URL } from "#consts/global";
import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export const revalidate = 120;
export const runtime = "edge";

async function page() {
  return <PostListPage pageString="2" urlPath={COLUMN_ROOT_URL} category={PostCategoryEnum.COLUMN} />;
}

export default page;
