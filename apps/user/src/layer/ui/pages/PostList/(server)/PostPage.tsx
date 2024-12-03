import type { PostListViewList } from "#layer/domain/post/post.action.ts";
import PostPageList from "#layer/ui/pages/PostList/(server)/PostPageList.tsx";
import PostPagePagination from "#layer/ui/pages/PostList/(server)/PostPagePagination.tsx";

function PostPage({
  list,
  page,
  pageSize,
  pageTotalCount,
}: { list: PostListViewList[]; page: number; pageSize: number; pageTotalCount: number }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1">
        <PostPageList list={list} />
      </div>
      <div className="h-fit fixed bottom-0 left-0 w-full p-2 bg-white bg-opacity-80 border-t-2 border-gray-100 dark:bg-slate-800 dark:border-gray-600 dark:text-white">
        <PostPagePagination currentCursor={page} pageSize={pageSize} totalCount={pageTotalCount} />
      </div>
    </div>
  );
}

export default PostPage;
