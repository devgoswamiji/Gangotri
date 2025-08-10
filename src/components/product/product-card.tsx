import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { Button } from '../ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants[0];

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-lg border-border/50 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={firstVariant.previewImage}
              alt={product.title}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="jewelry 3d render"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline text-lg font-medium leading-tight text-foreground">
            {product.title}
          </h3>
          <p className="mt-2 text-base font-medium text-primary/90">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: product.currency,
            }).format(firstVariant.price)}
          </p>
          <Button variant="outline" className="mt-4 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View in 360°
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
