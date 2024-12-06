import { getNewPostListAction } from "#layer/action/post/original.post.action";
import NewPostListGrid from "#layer/ui/components/private/Grid/NewPostListGrid";

/**
 * The /new page.
 *
 * Fetches a list of new items from the API and displays them in a table.
 *
 * @returns A table component displaying the new items.
 */
async function page() {
  const list = await getNewPostListAction({ page: 0 });

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="h-full w-full">
        <NewPostListGrid initialItems={list} />
      </div>
    </div>
  );
}

export default page;
