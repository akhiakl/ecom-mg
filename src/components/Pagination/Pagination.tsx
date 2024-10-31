"use client";
import Arrow from "@/icons/Arrow";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import PaginationLink from "./PaginationLink";

type PaginationProps = {
  className?: string;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

const PAGE_LIMIT = 5;

function getPageArray(currentPage: number, totalPages: number) {
  const halfLimit = Math.floor(PAGE_LIMIT / 2);

  const startPage = Math.max(
    1,
    Math.min(currentPage - halfLimit, totalPages - PAGE_LIMIT + 1),
  );
  const endPage = Math.min(totalPages, startPage + PAGE_LIMIT - 1);

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
}

const Pagination = ({
  className,
  onPageChange,
  totalPages = 8,
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const currentPage = +(searchParams.get("page") ?? 1);
  const pagesArray = useMemo(
    () => getPageArray(currentPage, totalPages),
    [currentPage, totalPages],
  );
  return (
    <ol
      className={clsx(
        "flex justify-center gap-1 text-xs font-medium",
        className,
      )}
    >
      <li className="mr-2">
        <PaginationLink
          onPageClick={onPageChange}
          page={currentPage - 1}
          disabled={currentPage <= 1}
        >
          <span className="sr-only">Prev Page</span>
          <Arrow size="xsmall" direction="left" />
        </PaginationLink>
      </li>

      {pagesArray.map((pageNum) => (
        <li key={`pageNum_${pageNum}`}>
          <PaginationLink
            onPageClick={onPageChange}
            page={pageNum}
            active={pageNum === currentPage}
          >
            {pageNum}
          </PaginationLink>
        </li>
      ))}
      <li className="ml-2">
        <PaginationLink
          onPageClick={onPageChange}
          page={currentPage + 1}
          disabled={currentPage >= totalPages}
        >
          <span className="sr-only">Next Page</span>
          <Arrow size="xsmall" />
        </PaginationLink>
      </li>
    </ol>
  );
};

export default Pagination;
