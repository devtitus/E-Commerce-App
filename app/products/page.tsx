import { SearchBar, SortSelector, CategoryFilter, ProductGrid, NavigationProvider } from '@/app/components/index';

async function getProducts(query?: string, page: number = 1, sortBy?: string, order?: string, category?: string) {
  let url = `${process.env.NEXT_PUBLIC_APP_URL}/api/products?page=${page}`;
  if (query) url += `&q=${query}`;
  if (sortBy && order) url += `&sortBy=${sortBy}&order=${order}`;
  if (category) url += `&category=${category}`;

  const res = await fetch(url, { cache: 'no-store' });

  const data = await res.json();

  return {
    products: data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      category: product.category,
      rating: product.rating,
      availability: product.availabilityStatus,
      discount: product.discountPercentage
    })),
    total: data.total
  };
}

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/categories`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.map((c: any) => c.slug);
}

type SearchParams = {
  q?: string;
  page?: string;
  sortBy?: string;
  order?: string;
  category?: string;
}

const Products = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
  const params = await searchParams;
  const query = params?.q;
  const sortBy = params?.sortBy;
  const order = params?.order;
  const page = Number(params?.page || 1);
  const category = params?.category;
  const { products, total } = await getProducts(query, page, sortBy, order, category);
  const categories = await getCategories();

  return (
    <NavigationProvider>
      <div className='w-full h-[calc(100svh-64px)] md:h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
        <div className='flex-shrink-0 px-4 md:px-8 lg:px-15 py-2 lg:pt-8 pb-4 lg:pb-3 border-b border-black/10'>
          <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center lg:grid lg:grid-cols-3 items-center gap-4 lg:gap-4 mb-2 md:mb-3">
            {/* Empty left - hidden on mobile */}
            <div className='hidden md:block'></div>

            {/* Center - SearchBar */}
            <div className="flex justify-center order-first md:order-none">
              <SearchBar />
            </div>

            {/* Right - Filters */}
            <div className="flex justify-end gap-2 md:gap-4 flex-nowrap">
              <CategoryFilter categories={categories} />
              <SortSelector />
            </div>
          </div>

          <span className='text-sm md:text-sm font-semibold text-black/70'>Products</span>
        </div>

        <ProductGrid products={products} total={total} currentPage={page} />
      </div>
    </NavigationProvider>
  )

}

export default Products
