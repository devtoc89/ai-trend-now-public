import { NEWS_PAGE_SIZE } from "#consts/global";
import { getPostListActionCache, getPostTotalCountActionCache } from "#layer/domain/post/post.action";
import PostListPageContent from "#layer/ui/pages/PostListPage/(server)/PostListPageContent";
import NoValidUrl from "@repo/ui/components/ui/InvalidUrl";
import NoData from "@repo/ui/components/ui/NoData";

async function PostListPage({
  pageString,
  urlPath,
}: {
  pageString: string;
  urlPath: string;
}) {
  if (!pageString || pageString.match(/^[0-9]+$/) === null) return <NoValidUrl />;

  const page = Number(pageString) - 1;

  if (page < 0) return <NoValidUrl />;
  const list = await getPostListActionCache(page, NEWS_PAGE_SIZE);
  const pageTotalCount = await getPostTotalCountActionCache();

  // TODO: NO Data components.
  if (!list || list.length === 0) return <NoData />;

  return (
    <PostListPageContent
      list={list}
      page={page + 1}
      pageSize={NEWS_PAGE_SIZE}
      pageTotalCount={pageTotalCount}
      urlPath={urlPath}
    />
  );
}

export default PostListPage;
