import { SearchBar, SortSelector, CategoryFilter, ProductCard } from '@/app/components/index';

type SearchParams = {
  q?: string;
}

async function getProducts(query?: string) {
  const url = query ? `${process.env.NEXT_PUBLIC_APP_URL}/api/products?q=${query}` : `${process.env.NEXT_PUBLIC_APP_URL}/api/products`;
  const res = await fetch(url, {
    cache: 'no-store'
  });

  const data = await res.json();

  return data.products.map((product: any) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
    category: product.category,
    rating: product.rating,
    availability: product.availabilityStatus,
    discount: product.discountPercentage
  }));
}

const Products = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
  const params = await searchParams;
  const products = await getProducts(params?.q);
  return (
    <div className='w-full h-[calc(100vh-64px)] flex flex-col'>
      <div className='flex-shrink-0 px-15 py-8 pb-4'>
        <div className="grid grid-cols-3 items-center mb-5">
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

        <span className='text-base font-semibold text-black/60'>Products</span>
      </div>

      <div className='flex-1 overflow-y-auto px-15 pb-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Products