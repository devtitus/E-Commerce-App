import { SearchBar, SortSelector, CategoryFilter, ProductCard } from '@/app/components/index';

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, {
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
    availability: product.availabilityStatus
  }));
}

const Products = async () => {
  const products = await getProducts();
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
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>

  )
}

export default Products