import { GLOBAL_TITLE } from "#consts/global.ts";
import { getPostItemAction } from "#layer/domain/post/post.action.ts";
import Markdown from "#layer/ui/components/common/Markdown/Markdown.tsx";
import TimeAgo from "#layer/ui/pages/PostList/(client)/TimeAgo/TimeAgo.tsx";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import Image from "next/image";

// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour.

export const revalidate = 3600;
export const dynamicParams = true; // or false, to 404 on unknown paths

const getPostItemActionCache = unstable_cache(async (id) => await getPostItemAction({ id }), ["getPostItemAction"]);

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
        <div key={post.id} className="md:p-6 p-0 w-full">
          <Markdown>{post.title}</Markdown>
          <div>
            <TimeAgo>{post.createdAt}</TimeAgo>
          </div>
          <br />
          <Markdown>{post.summary}</Markdown>
          <div className="w-full">
            <Image
              src="/no_image.png"
              width={1024}
              height={1024}
              alt="Image"
              className="object-cover rounded-lg w-full max-h-80"
            />
          </div>
          <Markdown>{post.content}</Markdown>
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

  const title = post?.title ? `${post.title} (${GLOBAL_TITLE})` : GLOBAL_TITLE;
  const description = post?.summary ? `${post.summary} (${GLOBAL_TITLE})` : GLOBAL_TITLE;
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
