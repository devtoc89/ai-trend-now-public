import { getAiPostListAction } from "#layer/domain/ai/ai.action.ts";
import AiPostListGrid from "#layer/ui/components/private/Grid/AiPostListGrid.tsx";

/**
 * The /new page.
 *
 * Fetches a list of new items from the API and displays them in a table.
 *
 * @returns A table component displaying the new items.
 */
async function page() {
  const list = await getAiPostListAction({ page: 0 });

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <div className="h-full w-full">
        <AiPostListGrid initialItems={list} />
      </div>
    </div>
  );
}

export default page;