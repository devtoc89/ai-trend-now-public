"use client";
import { changeNewPostStatusAction, getNewPostListAction } from "#layer/action/post/original.post.action";
import type { NewPostListGridItem } from "#types/viewModel/NewPostListGridItem";
import { Checkbox, Grid, type GridOptions } from "@repo/ui/organisms";
import { dateFormat } from "@repo/util/date/date.util";
import { debounce } from "es-toolkit";
import type React from "react";
import { useCallback, useState } from "react";

const eventDebouncer = debounce((callback) => {
  callback();
}, 250);

const header: GridOptions<NewPostListGridItem>["header"] = [
  {
    key: "category",
    label: "유형",
    width: "1fr",
  },
  {
    key: "source",
    label: "소스",
    width: "1fr",
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
    key: "orgCreateAt",
    label: "원문생성",
    width: "1fr",
  },
  {
    key: "createdAt",
    label: "생성",
    width: "1fr",
  },
  {
    key: "url",
    label: "원문",
    width: "1fr",
  },
  {
    key: "isSelected",
    label: "선택",
    width: "1fr",
  },
];

const content: GridOptions<NewPostListGridItem>["content"] = {
  category: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center">{value}</p>
      </div>
    ),
  },
  source: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center">{value}</p>
      </div>
    ),
  },
  title: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center line-clamp-2" title={value}>
          {value}
        </p>
      </div>
    ),
  },

  content: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="break-all w-full line-clamp-2" title={value}>
          {value}
        </p>
      </div>
    ),
  },
  url: {
    render: ({ value }) => (
      <div className="px-2 py-1 text-center">
        <a href={value} target="_blank" rel="noreferrer">
          링크
        </a>
      </div>
    ),
  },
  orgCreateAt: {
    render: ({ value }) => (
      <div className="px-2 py-1">
        <p className="text-center text-sm">{dateFormat({ value })}</p>
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

const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  // e.preventDefault();
  const target = e.target as HTMLInputElement;
  if (target.tagName === "INPUT") {
    eventDebouncer(() => {
      const id = target.id;
      const checked = target.checked;
      void changeNewPostStatusAction(id, checked).then((v) => {
        if (v.success) {
          target.checked = v.data.selectedFlg;
        }
      });
    });
  }
};

function newListHook({ initialItems }: { initialItems: NewPostListGridItem[] }) {
  const [data, setData] = useState({
    items: [...initialItems],
    isLoading: false,
    page: initialItems.length ? 0 : -1,
    hasNext: !!initialItems.length,
  });

  const next = async () => {
    if (data.isLoading || !data.hasNext) return;
    setData((prev) => ({ ...prev, isLoading: true }));
    const list = await getNewPostListAction({ page: data.page + 1 });
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

function NewPostListGrid({ initialItems }: { initialItems: NewPostListGridItem[] }) {
  const { items, next, hasNext } = newListHook({ initialItems });
  const [gridOptions] = useState<GridOptions<NewPostListGridItem>>({
    header,
    content: {
      ...content,
      isSelected: {
        render: ({ value, id }) => (
          <div className="px-2 py-1 text-center">
            <Checkbox defaultChecked={value} id={id} onChange={handleOnChange} />
          </div>
        ),
      },
    },
  });
  const handleOnPage = useCallback(() => eventDebouncer(next), [next]);
  return (
    <>
      <Grid items={items} options={gridOptions} nextPage={handleOnPage} hasNext={hasNext} />
    </>
  );
}

export default NewPostListGrid;
