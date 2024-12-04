import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";

export const revalidate = 120;

async function page() {
  return <PostListPage pageString="2" urlPath="/post/column/" />;
}

export default page;
