import { NEWS_PAGE_SIZE } from "#consts/global.ts";
import { getPostListActionCache, getPostTotalCountActionCache } from "#layer/domain/post/post.action.ts";
import PostPage from "#layer/ui/pages/PostList/(server)/PostPage.tsx";

export const revalidate = 3600;

// TODO: paging 고도화
async function page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const orgPage = (await params).page;

  if (!orgPage || orgPage.match(/^[0-9]+$/) === null) return <>Invalid Parameter</>;

  const page = Number(orgPage) - 1;

  if (page < 0) return <>Invalid Parameter</>;
  const list = await getPostListActionCache(page, NEWS_PAGE_SIZE);
  const pageTotalCount = await getPostTotalCountActionCache();

  // TODO: NO Data components.
  if (!list || list.length === 0) return <>No Data</>;

  return <PostPage list={list} page={page + 1} pageSize={NEWS_PAGE_SIZE} pageTotalCount={pageTotalCount} />;
}

export default page;
