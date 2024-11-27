import { getPostListAction } from "#layer/domain/post/post.action.ts";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const revalidate = 60;

const getPostItemActionCache = unstable_cache(async () => await getPostListAction({ page: 0 }), ["getPostListAction"], {
  revalidate: 59,
});

/**
 * The /new page.
 *
 * Fetches a list of new items from the API and displays them in a table.
 *
 * @returns A table component displaying the new items.
 */
async function page() {
  const list = await getPostItemActionCache();

  // TODO: NO Data components.
  if (!list || list.length === 0) return <>No Data</>;

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full flex gap-5 flex-col">
        {list.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            prefetch
            className="border border-gray-200 rounded-md py-3 px-6 whitespace-pre-wrap w-full shadow-md"
          >
            <div className="flex flex-row items-baseline gap-3">
              <div className="flex-1 pb-2">
                <ReactMarkdown className="markdown-container">{post.title}</ReactMarkdown>
              </div>
              <div className="w-fit">{post.createdAt}</div>
            </div>
            <ReactMarkdown className="markdown-container">{post.summary}</ReactMarkdown>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
