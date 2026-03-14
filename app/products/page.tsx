import { SearchBar, SortSelector, CategoryFilter } from '@/components/index';

const Products = () => {
  return (
    <div className='w-full h-[calc(100vh-64px)] px-15 py-8'>
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <CategoryFilter />
          <SortSelector />
        </div>
      </div>

      Products
    </div>
  )
}

export default Products