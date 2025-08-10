import { collections, metals } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductFiltersClient } from './product-filters-client';

export function ProductFilters() {
  return (
    <aside className="sticky top-24">
      <h2 className="font-headline text-2xl mb-4">Filters</h2>
      <ProductFiltersClient collections={collections} metals={metals} />
    </aside>
  );
}
