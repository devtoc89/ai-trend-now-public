import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
export const revalidate = 120;

async function page() {
  return <PostListPage pageString="2" urlPath="/post/paper/" category={PostCategoryEnum.PAPER} />;
}

export default page;
