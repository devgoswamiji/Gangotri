import { ProductCard } from '@/components/product/product-card';
import { ProductFilters } from '@/components/product/product-filters';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ShopSort } from '@/components/product/shop-sort';

interface ShopPageProps {
  searchParams: {
    sort?: string;
    collection?: string | string[];
    metal?: string | string[];
    price?: string;
  };
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  let filteredProducts: Product[] = [...products];

  // Filtering logic
  const { collection, metal, price } = searchParams;
  if (collection) {
    const collections = Array.isArray(collection) ? collection : [collection];
    filteredProducts = filteredProducts.filter((p) =>
      collections.some(c => p.collections.includes(c))
    );
  }
  if (metal) {
     const metals = Array.isArray(metal) ? metal : [metal];
    filteredProducts = filteredProducts.filter((p) =>
      p.variants.some(v => metals.includes(v.metal))
    );
  }
   if (price) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(price));
  }

  // Sorting logic
  const { sort } = searchParams;
  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    // Assuming createdAt is a timestamp or date-convertible
    filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-5xl font-bold">Our Jewellery</h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Explore our curated collections of fine jewellery, each piece telling a story of artistry and elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>

        <main className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <ShopSort />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
             {filteredProducts.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                <h2 className="font-headline text-2xl font-bold">No Products Found</h2>
                <p className="mt-2 text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
          {/* Pagination can be added here */}
        </main>
      </div>
    </div>
  );
}
