import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants[0];

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-lg border-none shadow-sm transition-shadow duration-300 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={firstVariant.previewImage}
              alt={product.title}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="jewelry"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline text-lg font-medium leading-tight">
            {product.title}
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: product.currency,
            }).format(firstVariant.price)}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
