"use server";

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@repo/ui/components/ui/pagination";
import { cn } from "@repo/util/style/tailwind.util";
import { range } from "es-toolkit";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PostPagePagination({
  currentCursor,
  totalCount,
  pageSize,
  navSize = 2,
  urlPath,
}: { currentCursor: number; totalCount: number; pageSize: number; navSize?: number; urlPath: string }) {
  // const minPage = 0; // 0
  const currentPage = Math.max(0, currentCursor - 1); // start with 0
  const pageOffset = navSize * 2 + 1;

  // const curPageGroup = Math.floor(currentPage / navSize);
  const minPage = 0; // start with 0
  const maxPage = Math.floor(Math.max(0, totalCount - 1) / pageSize); // start with 0

  const navStartPage = currentPage - navSize;
  const navEndPage = currentPage + navSize;

  const overflowStartPage = navStartPage < 0 ? -navStartPage : 0;
  const overflowEndPage = navEndPage > maxPage ? navEndPage - maxPage : 0;

  const rebalancedStartPage = Math.max(minPage, navStartPage - overflowEndPage);
  const rebalancedEndPage = Math.min(maxPage, navEndPage + overflowStartPage);

  const prevPage = Math.max(minPage, currentPage - pageOffset);
  const nextPage = Math.min(maxPage, currentPage + pageOffset);

  const pageNavList = range(rebalancedStartPage, rebalancedEndPage + 1);

  return (
    <Pagination className="h-full w-full">
      <PaginationContent className="justify-between w-fit gap-4">
        <PaginationItem>
          <PaginationLink
            href={currentPage === prevPage ? "#" : `${urlPath}page/${prevPage + 1}`}
            size="default"
            prefetch
            aria-label="previous pages"
            aria-disabled={currentPage === prevPage}
            className={cn(currentPage === prevPage && "pointer-events-none", "p-0 px-4")}
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        {pageNavList.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${urlPath}page/${page + 1}`}
              isActive={page === currentPage}
              size="default"
              prefetch
              aria-disabled={currentPage === page}
              className={cn(currentPage === page && "pointer-events-none", "p-0 px-0")}
            >
              <p className="w-10 flex justify-center">{page + 1}</p>
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            href={currentPage === nextPage ? "#" : `${urlPath}page/${nextPage + 1}`}
            size="default"
            prefetch
            aria-label="next pages"
            aria-disabled={currentPage === nextPage}
            className={cn(currentPage === nextPage && "pointer-events-none", "p-0 px-4")}
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PostPagePagination;
