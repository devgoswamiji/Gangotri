import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data';
import { ShieldCheck, Truck, Gem } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.filter(p => p.collections.includes('best-sellers')).slice(0, 4);

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] w-full bg-gradient-to-t from-background via-transparent to-transparent">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Elegant jewellery on display"
          fill
          className="-z-10 object-cover brightness-75"
          data-ai-hint="luxury jewelry background"
          priority
        />
        <div className="container flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-5xl font-bold md:text-7xl text-white">
            Timeless Elegance, Redefined
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
            Discover exquisite collections, handcrafted with passion and precision.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary/80 hover:bg-primary text-primary-foreground backdrop-blur-sm">
            <Link href="/shop">Explore Collections</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-4xl font-bold">
            Featured Products
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Handpicked from our most beloved collections, these pieces represent the pinnacle of our craft.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

       <section className="bg-card py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Gem className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-2xl font-bold">Ethically Sourced</h3>
              <p className="mt-2 text-muted-foreground">
                We use only conflict-free diamonds and sustainably sourced precious metals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-2xl font-bold">Lifetime Warranty</h3>
              <p className="mt-2 text-muted-foreground">
                Our commitment to quality means your cherished pieces are protected for life.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-2xl font-bold">Insured Shipping</h3>
              <p className="mt-2 text-muted-foreground">
                Enjoy complimentary, fully insured, and discreet shipping on every order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
