import { getSelectedPostListAction } from "#layer/domain/original/original.post.action.ts";
import SelectedPostListGrid from "#layer/ui/components/private/Grid/SelectedPostListGrid.tsx";

/**
 * The /selected page.
 *
 * Fetches a list of selected items from the API and displays them in a table.
 *
 * @returns A table component displaying the selected items.
 */
async function page() {
  const list = await getSelectedPostListAction({ page: 0 });

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="h-full w-full">
        <SelectedPostListGrid initialItems={list} />
      </div>
    </div>
  );
}

export default page;