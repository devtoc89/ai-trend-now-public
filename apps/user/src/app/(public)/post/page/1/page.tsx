import { NEWS_PAGE_SIZE } from "#consts/global.ts";
import { getPostListAndCountActionCache } from "#layer/domain/post/post.action.ts";
import PostPage from "#layer/ui/pages/PostList/(server)/PostPage.tsx";

export const revalidate = 60;

async function page() {
  const { list, totalCount } = await getPostListAndCountActionCache(0, NEWS_PAGE_SIZE);

  // TODO: NO Data components.
  if (!list || list.length === 0) return <>No Data</>;

  return <PostPage list={list} page={1} pageSize={NEWS_PAGE_SIZE} pageTotalCount={totalCount} />;
}

export default page;
