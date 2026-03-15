"use client";
import { useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/index";

const PaginationComp = ({ totalPages, currentPage }: { totalPages: number, currentPage: number }) => {
  const params = useSearchParams();

  const createLink = (page: number) => {
    const search = new URLSearchParams(params);
    search.set("page", page.toString());
    return `/products?${search.toString()}`;
  };

  const pages = [];

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  pages.push(1);

  if (start > 2) pages.push("ellipsis-start");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("ellipsis-end");

  if (totalPages > 1) pages.push(totalPages);

  return (
    <Pagination className='h-auto py-2.5 border-t border-black/20 flex items-end justify-end px-15'>
      <PaginationContent>

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createLink(currentPage - 1)} />
          </PaginationItem>
        )}

        {pages.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={`${page}-${index}`}>
              <PaginationLink
                href={createLink(Number(page))}
                isActive={Number(page) === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={createLink(currentPage + 1)} />
          </PaginationItem>
        )}

      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComp