import { cn } from "@repo/util/style/tailwind.util.ts";
import { range } from "es-toolkit";
import Link from "next/link";

function PageItem({ pageNumber, label, isSelected }: { pageNumber: number; label?: string; isSelected?: boolean }) {
  return (
    <Link
      href={`/post/page/${pageNumber}`}
      prefetch
      className={cn(
        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
        isSelected && "font-bold",
      )}
    >
      <p className="">{label || pageNumber}</p>
    </Link>
  );
}

function PostPagePagination({
  currentCursor,
  totalCount,
  pageSize,
  navSize = 5,
}: { currentCursor: number; totalCount: number; pageSize: number; navSize?: number }) {
  // const minPage = 0; // 0
  const currentPage = Math.max(0, currentCursor - 1); // start with 0
  const maxPage = Math.floor(Math.max(0, totalCount - 1) / pageSize); // start with 0

  const minPageGroup = 0; // 0
  // start with 0  if navSize=5 0 group page 0,1,2,3,4 / 1 group page  5,6,7,8,9
  const curPageGroup = Math.floor(currentPage / navSize);
  // start with 0  if navSize=5 0 group page 0,1,2,3,4 / 1 group page  5,6,7,8,9
  const maxPageGroup = Math.floor(Math.max(0, maxPage - 1) / navSize);

  const hasPrevPageGroup = curPageGroup - 1 >= minPageGroup;
  const hasNextPageGroup = curPageGroup + 1 <= maxPageGroup;

  const navStartPage = curPageGroup * navSize + 1;
  // start with 1, range last number is ignored
  const navEndPage = Math.min(curPageGroup * navSize + navSize + 1, maxPage + 1 + 1);

  const pageNavList = range(navStartPage, navEndPage);

  return (
    <div className="h-full w-full flex flex-row justify-center">
      {/* {hasPrevPageGroup && <PageItem pageNumber={Math.max(minPage + 1, currentCursor - navSize)} label="<" />} */}
      {hasPrevPageGroup && <PageItem pageNumber={curPageGroup * navSize} label="<" />}
      {pageNavList.map((page) => (
        <PageItem key={page} pageNumber={page} isSelected={page === currentCursor} />
      ))}
      {hasNextPageGroup && <PageItem pageNumber={curPageGroup * navSize + navSize + 1} label=">" />}
      {/* {hasNextPageGroup && <PageItem pageNumber={Math.min(currentCursor + navSize, maxPage + 1)} label=">" />} */}
    </div>
  );
}

export default PostPagePagination;
