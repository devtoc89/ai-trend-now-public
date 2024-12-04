import PostListPage from "#layer/ui/pages/PostListPage/(server)/PostListPage";

export const revalidate = 180;
export const dynamicParams = true;

async function page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  return <PostListPage pageString={(await params).page} urlPath="/post/column/" />;
}

export default page;
