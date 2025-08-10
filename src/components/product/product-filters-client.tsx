'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '../ui/button';

type FilterProps = {
  collections: { id: string; name: string }[];
  metals: { id: string; name: string }[];
};

export function ProductFiltersClient({ collections, metals }: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const currentValues = params.getAll(name);
      
      const newParams = new URLSearchParams();
      searchParams.forEach((val, key) => {
        if (key !== name) {
          newParams.append(key, val);
        }
      });

      let newValues = [...currentValues];
      if (currentValues.includes(value)) {
        newValues = newValues.filter((v) => v !== value);
      } else {
        newValues.push(value);
      }
      
      newValues.forEach(v => newParams.append(name, v));
      
      return newParams.toString();
    },
    [searchParams]
  );
  
  const [price, setPrice] = useState(Number(searchParams.get('price')) || 20000);

  const handlePriceChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('price', price.toString());
    router.push(pathname + '?' + params.toString());
  };

  const selectedCollections = searchParams.getAll('collection');
  const selectedMetals = searchParams.getAll('metal');

  const clearFilters = () => {
    router.push(pathname);
  }

  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={['collection', 'metal', 'price']} className="w-full">
        <AccordionItem value="collection">
          <AccordionTrigger className="font-headline text-lg">Collection</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {collections.filter(c => c.id !== 'all').map((collection) => (
              <div key={collection.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`collection-${collection.id}`}
                  checked={selectedCollections.includes(collection.id)}
                  onCheckedChange={() => {
                    router.push(pathname + '?' + createQueryString('collection', collection.id), { scroll: false });
                  }}
                />
                <Label htmlFor={`collection-${collection.id}`} className="font-body text-base cursor-pointer">
                  {collection.name}
                </Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="metal">
          <AccordionTrigger className="font-headline text-lg">Metal</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            {metals.filter(m => m.id !== 'all').map((metal) => (
              <div key={metal.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`metal-${metal.id}`}
                  checked={selectedMetals.includes(metal.name)}
                  onCheckedChange={() => {
                    router.push(pathname + '?' + createQueryString('metal', metal.name), { scroll: false });
                  }}
                />
                <Label htmlFor={`metal-${metal.id}`} className="font-body text-base cursor-pointer">{metal.name}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="font-headline text-lg">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4">
              <Slider
                  value={[price]}
                  max={20000}
                  step={100}
                  onValueChange={(newPrice) => setPrice(newPrice[0])}
                  onValueCommit={handlePriceChange}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>$0</span>
                  <span>${price.toLocaleString()}</span>
              </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant="outline" className="w-full" onClick={clearFilters}>Clear All Filters</Button>
    </div>
  );
}
