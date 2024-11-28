import type { PostListViewList } from "#layer/domain/post/post.action.ts";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

function PostPageList({ list }: { list: PostListViewList[] }) {
  return (
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
  );
}

export default PostPageList;
