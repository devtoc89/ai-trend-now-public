"use client";

import { generateAiAutoPostAction, generateAiPostAction } from "#layer/action/ai/ai.action";
import { getSelectedPostListAction } from "#layer/action/post/original.post.action";
import type { SelectedPostListGridItem } from "#types/viewModel/SelectedPostListGridItem";
import { Button, Checkbox, Grid, type GridOptions, Spinner } from "@repo/ui/organisms";
import { dateFormat } from "@repo/util/date/date.util";
import { debounce } from "es-toolkit";
import { type FormEventHandler, useCallback, useState } from "react";
import { toast } from "react-toastify";

const eventDebouncer = debounce((callback) => {
  callback();
}, 1000);

const header: GridOptions<SelectedPostListGridItem>["header"] = [
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
    type: "custom",
  },
];

const content: GridOptions<SelectedPostListGridItem>["content"] = {
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

function newListHook({ initialItems }: { initialItems: SelectedPostListGridItem[] }) {
  const [data, setData] = useState({
    items: [...initialItems],
    isLoading: false,
    page: initialItems.length ? 0 : -1,
    hasNext: !!initialItems.length,
  });

  const next = async () => {
    if (data.isLoading || !data.hasNext) return;
    setData((prev) => ({ ...prev, isLoading: true }));
    const list = await getSelectedPostListAction({ page: data.page + 1 });
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

function SelectedPostListGrid({ initialItems }: { initialItems: SelectedPostListGridItem[] }) {
  const { items, next, hasNext } = newListHook({ initialItems });
  const [isProcessing, setIsProcessing] = useState(false);
  const gridOptions: GridOptions<SelectedPostListGridItem> = {
    header,
    content,
    customContent: {
      isSelected: {
        render: ({ id }) => (
          <div className="px-2 py-1 text-center ">
            <Checkbox id={id} />
          </div>
        ),
      },
    },
  };

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault();
    const el = e.currentTarget;
    const id: string[] = [...el.querySelectorAll("input[type='checkbox']:checked")].map((v) => v.id);
    // if (id.length <= 1) {
    //   toast.error("2개 이상을 선택해 주세요.");
    //   return;
    // }
    try {
      setIsProcessing(true);
      const res = await generateAiPostAction({ id });
      if (res.success) {
        toast.success("AI글 작성 완료");
      } else {
        toast.error(res.error);
      }
    } catch (_) {
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleOnAiAutoPostButtonClick = useCallback(async () => {
    try {
      setIsProcessing(true);
      const res = await generateAiAutoPostAction();
      if (res.success) {
        toast.success("자동 AI글 작성 완료");
      } else {
        toast.error(res.error);
      }
    } catch (_) {
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleOnPage = useCallback(() => eventDebouncer(next), [next]);

  return (
    <form className="w-full h-full flex flex-col" onSubmit={handleOnSubmit}>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="register" disabled={isProcessing} onClick={handleOnAiAutoPostButtonClick}>
          <div className="flex flex-row gap-1">
            {isProcessing && (
              <div>
                <Spinner className="w-6 h-6" />
              </div>
            )}
            <div>generateAiAutoPost</div>
          </div>
        </Button>
        <Button type="submit" variant="register" disabled={isProcessing}>
          <div className="flex flex-row gap-1">
            {isProcessing && (
              <div>
                <Spinner className="w-6 h-6" />
              </div>
            )}
            <div>선택된 정보로 AI글 작성</div>
          </div>
        </Button>
      </div>
      <Grid items={items} options={gridOptions} nextPage={handleOnPage} hasNext={hasNext} />
    </form>
  );
}

export default SelectedPostListGrid;
