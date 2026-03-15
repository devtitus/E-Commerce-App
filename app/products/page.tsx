import { SearchBar, SortSelector, CategoryFilter, ProductCard, Pagination } from '@/app/components/index';

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
  const totalPages = Math.ceil(total / 10);

  return (
    <div className='w-full h-[calc(100vh-64px)] flex flex-col overflow-hidden'>
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
            <CategoryFilter categories={categories} />
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
      <Pagination totalPages={totalPages} currentPage={page} />
    </div>

  )
}

export default Products