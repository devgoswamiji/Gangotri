import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants[0];

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="h-full overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden bg-secondary">
            <Image
              src={firstVariant.previewImage}
              alt={product.title}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="jewelry 3d render"
            />
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline text-lg font-medium leading-tight text-foreground">
            {product.title}
          </h3>
          <p className="mt-2 text-base font-semibold text-accent">
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
