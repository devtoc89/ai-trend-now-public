"use server";

import type { PostItemViewItem } from "#layer/domain/post/post.action";
import PageBackButton from "#layer/ui/components/common/(client)/PageBack/PageBackButton";
import TimeAgo from "#layer/ui/components/common/(client)/TimeAgo/TimeAgo";
import Markdown from "#layer/ui/components/common/(server)/Markdown/Markdown";
import Image from "next/image";

function PostDetailPageContent({ post }: { post: PostItemViewItem }) {
  return (
    <div className="h-full w-full flex flex-col dark:text-gray-100">
      <div className="flex flex-row justify-end">
        <PageBackButton />
      </div>
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
                <a href={v.url} target="_blank" rel="noreferrer" className="underline">
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

export default PostDetailPageContent;
