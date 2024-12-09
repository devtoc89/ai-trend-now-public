"use server";

import type { PostItemViewItem } from "#layer/action/post.action";
import PageBackButton from "#layer/ui/components/common/(client)/PageBack/PageBackButton";
import Time from "#layer/ui/components/common/(client)/Time/TimeAgo";
import TimeAgo from "#layer/ui/components/common/(client)/TimeAgo/TimeAgo";
import Markdown from "#layer/ui/components/common/(server)/Markdown/Markdown";
import type { AiContentReference } from "@repo/types/model/ai.model";
import Image from "next/image";

function ReferenceItem({ item }: { item: AiContentReference }) {
  return (
    <div className="whitespace-normal pt-1" key={item.url}>
      <p>
        <strong>[{item.source}]</strong> {item.title}
      </p>
      <p className="text-sm">
        <strong>Published: </strong>
        {item.createdAt && <Time>{item.createdAt ?? ""}</Time>}
        {item.lastUpdatedAt && (
          <>
            &nbsp;(Updated: <Time>{item.lastUpdatedAt ?? ""}</Time>)
          </>
        )}
      </p>
      {item.authors && (
        <p className="text-sm">
          <strong>Author: </strong>
          {Array.isArray(item.authors) ? item.authors.map((v) => v.name).join(", ") : item.authors.name}
        </p>
      )}

      <a href={item.url} target="_blank" rel="noreferrer" className="underline">
        {item.url}
      </a>
    </div>
  );
}

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
          <div className="text-sm font-bold text-red-800">
            *이 기사는 AI가 생성한 내용으로, 일부 정보가 실제와 다를 수 있습니다. 정확한 확인을 위해 추가적인 검증을
            권장드립니다.
          </div>
          <br />
          <div className="">
            <h3>Reference</h3>
            {post.metadata?.references.map((v) => (
              <ReferenceItem item={v} key={v.url} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <PageBackButton variant="ghost" />
      </div>
    </div>
  );
}

export default PostDetailPageContent;
