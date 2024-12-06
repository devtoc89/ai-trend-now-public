"use client";

import { getPostListAction } from "#layer/action/post/post.action";
import type { PostListGridItem } from "#types/viewModel/PostListGridItem";
import { Grid, type GridOptions } from "@repo/ui/organisms";
import { dateFormat } from "@repo/util/date/date.util";
import { debounce } from "es-toolkit";
import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";

const eventDebouncer = debounce((callback) => {
  callback();
}, 250);

const header: GridOptions<PostListGridItem>["header"] = [
  {
    key: "title",
    label: "제목",
    width: "3fr",
  },
  {
    key: "content",
    label: "내용",
    width: "8fr",
  },
  {
    key: "metadata.insights",
    label: "인사이트",
    width: "5fr",
    type: "subfield",
  },
  {
    key: "metadata.references",
    label: "참조",
    width: "5fr",
    type: "subfield",
  },
  {
    key: "createdAt",
    label: "생성",
    width: "1fr",
  },
];

const content: GridOptions<PostListGridItem>["content"] = {
  title: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <ReactMarkdown>{value}</ReactMarkdown>
        {/* <p className="text-center" title={value}>
          {value}
        </p> */}
      </div>
    ),
  },
  content: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <ReactMarkdown>{value}</ReactMarkdown>
        {/* <p className="break-all w-full" title={value}>
          {value}
        </p> */}
      </div>
    ),
  },
  createdAt: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center text-sm">{dateFormat({ value })}</p>
      </div>
    ),
  },
};

const subfieldContent: GridOptions<PostListGridItem>["subfieldContent"] = {
  "metadata.insights": {
    render: ({ value }) => (
      <div className="px-2 py-1 text-center ">
        {/* <ReactMarkdown>{value}</ReactMarkdown> */}
        <p className="text-center" title={value}>
          {value}
        </p>
      </div>
    ),
  },
  "metadata.references": {
    render: ({ value }: { value: Array<Record<string, string>> }) => (
      <div className="px-2 py-1 text-center ">
        {value.map((v) => (
          <div key={v.url} className="text-left">
            <p className="whitespace-pre-wrap">category: {v.category}</p>
            <p className="whitespace-pre-wrap">title: {v.title}</p>
            <p className="whitespace-pre-wrap">source: {v.source}</p>
            <p className="whitespace-pre-wrap">url: {v.url}</p>
          </div>
        ))}
      </div>
    ),
  },
};

function newListHook({ initialItems }: { initialItems: PostListGridItem[] }) {
  const [data, setData] = useState({
    items: [...initialItems],
    isLoading: false,
    page: initialItems.length ? 0 : -1,
    hasNext: !!initialItems.length,
  });

  const next = async () => {
    if (data.isLoading || !data.hasNext) return;
    setData((prev) => ({ ...prev, isLoading: true }));
    const list = await getPostListAction({ page: data.page + 1 });
    setData((prev) => ({
      ...prev,
      isLoading: false,
      items: [...prev.items, ...list],
      page: prev.page + 1,
      hasNext: list.length > 0,
    }));
  };

  return { next, ...data };
}

function PostListGrid({ initialItems }: { initialItems: PostListGridItem[] }) {
  const { items, next, hasNext } = newListHook({ initialItems });
  const [gridOptions] = useState<GridOptions<PostListGridItem>>({
    header,
    content,
    subfieldContent,
  });
  const handleOnPage = useCallback(() => eventDebouncer(next), [next]);
  return <Grid items={items} options={gridOptions} nextPage={handleOnPage} hasNext={hasNext} />;
}

export default PostListGrid;
