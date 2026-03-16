"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/index";
import { useNavigation } from "@/app/components/NavigationContext";

const PaginationComp = ({ totalPages, currentPage }: { totalPages: number, currentPage: number }) => {
  const params = useSearchParams();
  const router = useRouter();
  const { startTransition } = useNavigation();
  const MAX_VISIBLE_AFTER_CURRENT = 1;

  const handlePageChange = (page: number) => {
    const search = new URLSearchParams(params);
    search.set("page", page.toString());
    startTransition(() => {
      router.push(`/products?${search.toString()}`);
    });
  };

  const pages = [];

  pages.push(1);

  if (totalPages === 1) {
  } else if (totalPages === 2) {
    pages.push(2);
  } else {
    let start = Math.max(2, currentPage);
    let end = Math.min(totalPages - 1, currentPage + MAX_VISIBLE_AFTER_CURRENT);


    if (start > 2) pages.push("ellipsis-start");
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push("ellipsis-end");
    pages.push(totalPages);
  }

  return (
    <Pagination className='h-auto py-2.5 border-t border-black/20 flex items-end justify-end px-4 md:px-8 lg:px-15'>
      <PaginationContent>

        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} />
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
                href="#" 
                onClick={(e) => { e.preventDefault(); handlePageChange(Number(page)); }}
                isActive={Number(page) === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} />
          </PaginationItem>
        )}

      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComp;
