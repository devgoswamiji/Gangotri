import { products } from '@/lib/data';
import { ProductDisplayClient } from '@/components/product/product-display-client';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/product/product-card';
import { Separator } from '@/components/ui/separator';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.collections.some(c => product.collections.includes(c))).slice(0, 4);

  return (
    <div className="container py-12 px-4 md:px-6">
      <ProductDisplayClient product={product} />

      <Separator className="my-16" />

      <section className="py-16">
        <h2 className="text-center font-headline text-4xl font-bold">
            You Might Also Like
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </div>
  );
}
