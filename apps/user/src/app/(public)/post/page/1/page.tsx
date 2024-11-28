import { getPostListActionCache, getPostTotalCountActionCache } from "#layer/domain/post/post.action.ts";
import PostPage from "#layer/ui/pages/PostList/(server)/PostPage.tsx";

export const revalidate = 60;

// const getPostListActionCache = unstable_cache(async () => await getPostListAction({ page: 0 }), ["getPostListAction"], {
//   revalidate: 60,
// });

async function page() {
  const pageSize = 10;
  const list = await getPostListActionCache(0, pageSize);
  const pageTotalCount = await getPostTotalCountActionCache();

  // TODO: NO Data components.
  if (!list || list.length === 0) return <>No Data</>;

  return <PostPage list={list} page={1} pageSize={pageSize} pageTotalCount={pageTotalCount} />;
}

export default page;
