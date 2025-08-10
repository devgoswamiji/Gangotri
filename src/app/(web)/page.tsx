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
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-20" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 brightness-110"
          poster="https://placehold.co/1920x1080/FFFAF0/A67C00.png"
          data-ai-hint="jewelry cinematic gold"
        >
          {/* <source src="/videos/gangotri-hero.mp4" type="video/mp4" /> */}
        </video>

        <div className="container text-primary-foreground">
          <h1 className="font-headline text-5xl font-bold md:text-7xl text-primary">
            Where Tradition Meets Timeless Elegance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            Discover exquisite collections, handcrafted with passion and precision.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground backdrop-blur-sm">
            <Link href="/shop">Explore Collections</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-4xl font-bold text-primary">
            Featured Jewellery
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

       <section className="bg-secondary/20 py-16 md:py-24">
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
