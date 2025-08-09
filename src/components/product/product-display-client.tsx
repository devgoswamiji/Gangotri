'use client';
import { useState } from 'react';
import type { Product, Variant } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ThreeDViewer } from './three-d-viewer';
import { ShieldCheck, Truck, Gem, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductDisplayProps {
  product: Product;
}

export function ProductDisplayClient({ product }: ProductDisplayProps) {
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants[0]
  );
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
        title: "Added to Bag",
        description: `${product.title} (${selectedVariant.metal}) has been added to your shopping bag.`,
    });
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
      <ThreeDViewer
        image={selectedVariant.previewImage}
        alt={`${product.title} - ${selectedVariant.metal}`}
      />
      <div className="py-4">
        <h1 className="font-headline text-4xl font-bold lg:text-5xl">
          {product.title}
        </h1>
        <p className="mt-4 text-3xl font-light text-foreground">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: product.currency,
          }).format(selectedVariant.price)}
        </p>
        <p className="mt-4 text-base text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Select Metal
          </h3>
          <RadioGroup
            defaultValue={selectedVariant.id}
            onValueChange={(variantId) => {
              const newVariant = product.variants.find(
                (v) => v.id === variantId
              );
              if (newVariant) setSelectedVariant(newVariant);
            }}
            className="mt-4 grid grid-cols-2 gap-4"
          >
            {product.variants.map((variant) => (
              <div key={variant.id}>
                <RadioGroupItem
                  value={variant.id}
                  id={variant.id}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={variant.id}
                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {variant.metal}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mt-8 flex items-stretch gap-4">
          <Button size="lg" className="flex-1" onClick={handleAddToCart}>
            Reserve the {product.title.split(" ")[0]}
          </Button>
          <Button size="lg" variant="outline" className="px-4">
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        <Accordion type="single" collapsible className="mt-8 w-full">
          <AccordionItem value="description">
            <AccordionTrigger className="font-headline text-lg">
              Description
            </AccordionTrigger>
            <AccordionContent className="prose prose-sm text-muted-foreground">
              {product.longDescription}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="details">
            <AccordionTrigger className="font-headline text-lg">
              Product Details
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Metal: {selectedVariant.metal}</li>
                <li>SKU: {selectedVariant.sku}</li>
                <li>Hand-crafted in Italy</li>
                <li>Conflict-free gemstones</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger className="font-headline text-lg">
              Shipping & Returns
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
                <p>Complimentary, fully insured shipping on all orders.</p>
                <p>Hassle-free 30-day returns.</p>
                <p>Ships in 2-5 business days.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
