import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";

export const revalidate = 60;

async function page() {
  return <PostListPage pageString="1" urlPath="/post/column/" />;
}

export default page;
