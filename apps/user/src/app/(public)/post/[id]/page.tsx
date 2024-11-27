import { GlobalTitle } from "#consts/global.ts";
import { getPostItemAction } from "#layer/domain/post/post.action.ts";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour.
export const revalidate = 3600;
export const dynamicParams = true; // or false, to 404 on unknown paths

const getPostItemActionCache = unstable_cache(async (id) => await getPostItemAction({ id }), ["my-app-user"]);

async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await getPostItemActionCache(id);

  // TODO: NO Data components.
  if (!post) return <>No Data</>;

  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full flex gap-5 flex-col">
        <div key={post.id} className="border border-gray-300 rounded-md p-6 w-full">
          <ReactMarkdown className="markdown-container">{post.title}</ReactMarkdown>
          <div>{post.createdAt}</div>
          <br />
          <ReactMarkdown className="markdown-container">{post.summary}</ReactMarkdown>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            remarkRehypeOptions={{ passThrough: ["link"] }}
            className="markdown-container"
          >
            {
              // TODO: custom component로 만들 것!
              post.content
            }
          </ReactMarkdown>
          <br />
          <div className="">
            <h3>Reference</h3>
            {post.metadata?.references.map((v) => (
              <div className="whitespace-normal pt-1" key={v.url}>
                <p>
                  <strong>[{v.source}]</strong> {v.title}
                </p>
                <a href={v.url} target="_blank" rel="noreferrer">
                  {v.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostItemActionCache(id);

  const title = post?.title ? `${post.title} (${GlobalTitle})` : GlobalTitle;
  const description = post?.summary ? `${post.summary} (${GlobalTitle})` : GlobalTitle;
  const keywords = (post?.metadata?.keywords || ["ai"]).join(",");

  return {
    metadataBase: new URL("https://devtoc89.click"),
    title,
    description,
    generator: "Next.js",
    applicationName: "ai-news-prototype",
    referrer: "origin-when-cross-origin",
    keywords,
    authors: [{ name: "devtoc", url: "https://devtoc89.click" }],
    creator: "devtoc",
    publisher: "devtoc",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
export default page;
