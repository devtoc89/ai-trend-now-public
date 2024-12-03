import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/components/ui/pagination.tsx";
import { range } from "es-toolkit";

function PostPagePagination({
  currentCursor,
  totalCount,
  pageSize,
  navSize = 2,
}: { currentCursor: number; totalCount: number; pageSize: number; navSize?: number }) {
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
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/post/page/${prevPage + 1}`} size="default" />
        </PaginationItem>
        {pageNavList.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`/post/page/${page + 1}`} isActive={page === currentPage} size="default">
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`/post/page/${nextPage + 1}`} size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PostPagePagination;
