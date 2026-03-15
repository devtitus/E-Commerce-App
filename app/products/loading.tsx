import { Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <div className='w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
      <div className='flex-shrink-0 px-15 py-8 pb-4'>
        <div className="grid grid-cols-3 items-center mb-5">
          {/* Empty left */}
          <div></div>

          {/* Center - SearchBar skeleton */}
          <div className="flex justify-center">
            <Skeleton className="w-full max-w-md h-10" />
          </div>

          {/* Right - Filters skeleton */}
          <div className="flex justify-end gap-4">
            <Skeleton className="w-40 h-10" />
            <Skeleton className="w-32 h-10" />
          </div>
        </div>

        <Skeleton className="w-24 h-6" />
      </div>

      <div className='flex-1 overflow-y-auto px-15 pb-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
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
      <div className='h-auto py-2.5 border-t border-black/20 flex items-end justify-end px-15'>
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
