"use client";

import { ProductCard, Pagination } from "@/app/components/index";
import { Skeleton } from "@/components/ui";
import { useNavigation } from "@/app/components/NavigationContext";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  availability: string;
  discount: number;
};

interface ProductGridProps {
  products: Product[];
  total: number;
  currentPage: number;
}

export function ProductGrid({ products, total, currentPage }: ProductGridProps) {
  const { isPending } = useNavigation();
  
  const totalPages = Math.ceil(total / 10);

  return (
    <>
      <div className='flex-1 overflow-y-auto px-4 py-6 md:px-8 lg:px-15 2xl:py-8'>
        {isPending ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className='border border-black/10 bg-white w-full p-4 rounded-2xl overflow-hidden'>
                <Skeleton className="w-full h-48 rounded-xl mb-3" />
                <Skeleton className="w-3/4 h-5 mb-3" />
                <Skeleton className="w-1/2 h-4 mb-1" />
                <Skeleton className="w-1/3 h-4 mb-1" />
                <Skeleton className="w-1/2 h-5 mb-4" />
                <div className='flex flex-row gap-2'>
                  <Skeleton className="flex-1 h-10 rounded-md" />
                  <Skeleton className="flex-1 h-10 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <div className='flex-shrink-0'>
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </>
  );
}
