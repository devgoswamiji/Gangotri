'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

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
      if (currentValues.includes(value)) {
        params.delete(name);
        currentValues.filter((v) => v !== value).forEach(v => params.append(name, v));
      } else {
        params.append(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );
  
  const handlePriceChange = (newPrice: number[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('price', newPrice[0].toString());
    router.push(pathname + '?' + params.toString());
  };

  const selectedCollections = searchParams.getAll('collection');
  const selectedMetals = searchParams.getAll('metal');
  const price = searchParams.get('price');

  return (
    <Accordion type="multiple" defaultValue={['collection', 'metal', 'price']} className="w-full">
      <AccordionItem value="collection">
        <AccordionTrigger className="font-headline text-lg">Collection</AccordionTrigger>
        <AccordionContent className="space-y-3 pt-2">
          {collections.slice(1).map((collection) => (
            <div key={collection.id} className="flex items-center space-x-2">
              <Checkbox
                id={`collection-${collection.id}`}
                checked={selectedCollections.includes(collection.id)}
                onCheckedChange={() => {
                  router.push(pathname + '?' + createQueryString('collection', collection.id));
                }}
              />
              <Label htmlFor={`collection-${collection.id}`} className="font-body text-base">
                {collection.name}
              </Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="metal">
        <AccordionTrigger className="font-headline text-lg">Metal</AccordionTrigger>
        <AccordionContent className="space-y-3 pt-2">
          {metals.slice(1).map((metal) => (
            <div key={metal.id} className="flex items-center space-x-2">
              <Checkbox
                id={`metal-${metal.id}`}
                 checked={selectedMetals.includes(metal.name)}
                 onCheckedChange={() => {
                   router.push(pathname + '?' + createQueryString('metal', metal.name));
                 }}
              />
              <Label htmlFor={`metal-${metal.id}`} className="font-body text-base">{metal.name}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="price">
        <AccordionTrigger className="font-headline text-lg">Price Range</AccordionTrigger>
        <AccordionContent className="pt-4">
            <Slider
                defaultValue={[Number(price) || 20000]}
                max={20000}
                step={100}
                onValueCommit={handlePriceChange}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$0</span>
                <span>${(Number(price) || 20000).toLocaleString()}</span>
            </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
