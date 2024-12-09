import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
export const revalidate = 120;

async function page() {
  return <PostListPage pageString="2" urlPath="/post/column/" category={PostCategoryEnum.COLUMN} />;
}

export default page;
