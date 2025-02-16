"use server";

import type { PostListViewList } from "#layer/action/post.action";
import PostListPageList from "#layer/ui/pages/PostListPage/(server)/PostListPageList";
import PostPagePagination from "#layer/ui/pages/PostListPage/(server)/PostListPagePagination";

function PostListPageContent({
  list,
  page,
  pageSize,
  pageTotalCount,
  urlPath,
}: { list: PostListViewList[]; page: number; pageSize: number; pageTotalCount: number; urlPath: string }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1">
        <PostListPageList list={list} urlPath={urlPath} />
      </div>
      <div className="h-fit fixed bottom-0 left-0 w-full p-2  border-t bg-fore-background border-muted">
        <PostPagePagination currentCursor={page} pageSize={pageSize} totalCount={pageTotalCount} urlPath={urlPath} />
      </div>
    </div>
  );
}

export default PostListPageContent;
