import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className='w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
      <div className='flex-shrink-0 px-4 md:px-8 lg:px-15 py-6 md:py-8 pb-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0 mb-5">
          {/* Empty left - hidden on mobile */}
          <div className='hidden md:block'></div>

          {/* Center - SearchBar skeleton */}
          <div className="flex justify-center order-first md:order-none">
            <Skeleton className="w-full max-w-md h-10" />
          </div>

          {/* Right - Filters skeleton */}
          <div className="flex justify-end gap-2 md:gap-4 flex-wrap">
            <Skeleton className="w-40 h-10" />
            <Skeleton className="w-32 h-10" />
          </div>
        </div>

        <Skeleton className="w-24 h-6" />
      </div>

      <div className='md:flex-1 overflow-y-auto px-4 py-6 md:px-8 lg:px-15 2xl:py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
          {Array.from({ length: 20 }).map((_, index) => (
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
      </div>
      
      {/* Pagination skeleton */}
      <div className='h-auto py-2.5 border-t border-black/20 flex items-end justify-end px-4 md:px-8 lg:px-15'>
        <div className="flex gap-2">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-8 h-8" />
          <Skeleton className="w-20 h-8" />
        </div>
      </div>
    </div>
  );
}
