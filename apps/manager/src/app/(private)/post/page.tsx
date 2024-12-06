import { getPostListAction } from "#layer/action/post/post.action";
import PostListGrid from "#layer/ui/components/private/Grid/PostListGrid";

/**
 * The /new page.
 *
 * Fetches a list of new items from the API and displays them in a table.
 *
 * @returns A table component displaying the new items.
 */
async function page() {
  const list = await getPostListAction({ page: 0 });

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="h-full w-full">
        <PostListGrid initialItems={list} />
      </div>
    </div>
  );
}

export default page;
