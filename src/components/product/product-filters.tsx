import { collections, metals } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductFiltersClient } from './product-filters-client';

export async function ProductFilters() {
  return (
    <Card className="sticky top-24 border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProductFiltersClient collections={collections} metals={metals} />
      </CardContent>
    </Card>
  );
}
