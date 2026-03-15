import { SearchBar, SortSelector, CategoryFilter } from '@/app/components/index';

const Products = () => {
  return (
    <div className='w-full h-[calc(100vh-64px)] px-15 py-8'>
      <div className="grid grid-cols-3 items-center">
        {/* Empty left */}
        <div></div>

        {/* Center - SearchBar */}
        <div className="flex justify-center">
          <SearchBar />
        </div>

        {/* Right - Filters */}
        <div className="flex justify-end gap-4">
          <CategoryFilter />
          <SortSelector />
        </div>
      </div>

      Products
    </div>

  )
}

export default Products