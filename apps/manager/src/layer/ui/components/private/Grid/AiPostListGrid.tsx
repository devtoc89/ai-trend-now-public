"use client";
import { getAiPostListAction } from "#layer/action/ai/ai.action";
import { publishAiPostAction } from "#layer/action/publish/publish.action";
import type { AiPostListGridItem } from "#types/viewModel/AiPostListGridItem";
import { Button, Grid, type GridOptions } from "@repo/ui/organisms";
import { dateFormat } from "@repo/util/date/date.util";
import { debounce } from "es-toolkit";
import { type MouseEventHandler, useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";

const eventDebouncer = debounce((callback) => {
  callback();
}, 250);

const header: GridOptions<AiPostListGridItem>["header"] = [
  {
    key: "insights",
    label: "인사이트",
    width: "3fr",
  },
  {
    key: "title",
    label: "제목",
    width: "3fr",
  },
  {
    key: "content",
    label: "내용",
    width: "5fr",
  },

  {
    key: "createdAt",
    label: "생성",
    width: "1fr",
  },
  {
    key: "isPublished",
    label: "발행",
    width: "1fr",
  },
];

const content: GridOptions<AiPostListGridItem>["content"] = {
  insights: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="break-all w-full line-clamp-2" title={value?.join(", ")}>
          {value?.join(", ")}
        </p>
      </div>
    ),
  },
  title: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <ReactMarkdown>{value}</ReactMarkdown>
        {/* <p className="text-center line-clamp-2" title={value}>
          {value}
        </p> */}
      </div>
    ),
  },
  content: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <ReactMarkdown>{value}</ReactMarkdown>
        {/* <p className="break-all w-full line-clamp-2" title={value}>
          {value}
        </p> */}
      </div>
    ),
  },

  createdAt: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center text-sm"> {dateFormat({ value })}</p>
      </div>
    ),
  },
};

function newListHook({ initialItems }: { initialItems: AiPostListGridItem[] }) {
  const [data, setData] = useState({
    items: [...initialItems],
    isLoading: false,
    page: initialItems.length ? 0 : -1,
    hasNext: !!initialItems.length,
  });

  const next = async () => {
    if (data.isLoading || !data.hasNext) return;
    setData((prev) => ({ ...prev, isLoading: true }));
    const list = await getAiPostListAction({ page: data.page + 1 });
    setData((prev) => ({
      ...prev,
      isLoading: false,
      items: [...prev.items, ...list],
      page: prev.page + 1,
      hasNext: list.length > 0,
    }));
  };

  const publish = useCallback(
    async (id: string) => {
      if (data.isLoading || !data.hasNext) return;
      setData((prev) => ({ ...prev, isLoading: true }));
      const res = await publishAiPostAction(id);
      if (res.success) {
        toast.success("발행이 완료되었습니다.");
        setData((prev) => ({
          ...prev,
          isLoading: false,
          items: prev.items.map((v) => (v.id !== id ? v : { ...v, isPublished: true })),
        }));
      } else {
        toast.error("발행이 실패하였습니다.");
        setData((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    },
    [data.hasNext, data.isLoading],
  );

  return { publish, next, ...data };
}

function AiPostListGrid({ initialItems }: { initialItems: AiPostListGridItem[] }) {
  const { items, next, hasNext, publish } = newListHook({ initialItems });

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      const target = e.target as HTMLButtonElement;
      if (target.tagName === "BUTTON") {
        eventDebouncer(() => {
          const id = target.id;
          void publish(id);
        });
      }
    },
    [publish],
  );

  const [gridOptions] = useState<GridOptions<AiPostListGridItem>>({
    header,
    content: {
      ...content,
      isPublished: {
        render: ({ id, value }) => (
          <div className="px-2 py-1 text-center">
            {value ? (
              "발행됨"
            ) : (
              <Button variant="register" type="button" id={id} onClick={handleOnClick}>
                발행
              </Button>
            )}
          </div>
        ),
      },
    },
  });
  const handleOnPage = useCallback(() => eventDebouncer(next), [next]);
  return <Grid items={items} options={gridOptions} nextPage={handleOnPage} hasNext={hasNext} />;
}

export default AiPostListGrid;
