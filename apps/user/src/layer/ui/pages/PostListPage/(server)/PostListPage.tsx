import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { NEWS_PAGE_SIZE } from "#consts/global";
import { getPostListAndCountActionCache } from "#layer/action/post.action";
import NoValidUrl from "#layer/ui/components/common/(server)/InvalidUrl/InvalidUrl";
import NoData from "#layer/ui/components/common/(server)/NoData/NoData";
import PostListPageContent from "#layer/ui/pages/PostListPage/(server)/PostListPageContent";

async function PostListPage({
  pageString,
  urlPath,
  category = PostCategoryEnum.COLUMN,
}: {
  pageString: string;
  urlPath: string;
  category: PostCategoryEnum;
}) {
  if (!pageString || pageString.match(/^[0-9]+$/) === null) return <NoValidUrl />;

  const page = Number(pageString) - 1;

  if (page < 0) return <NoValidUrl />;
  const { list, totalCount } = await getPostListAndCountActionCache(category, page, NEWS_PAGE_SIZE);

  // TODO: NO Data components.
  if (!list || list.length === 0) return <NoData />;

  return (
    <PostListPageContent
      list={list}
      page={page + 1}
      pageSize={NEWS_PAGE_SIZE}
      pageTotalCount={totalCount}
      urlPath={urlPath}
    />
  );
}

export default PostListPage;
