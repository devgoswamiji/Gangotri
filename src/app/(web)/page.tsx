import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data';
import { Gem, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const lookbookProducts = products.slice(0, 6);

  return (
    <>
      <section className="relative w-full h-[80vh] min-h-[600px] md:h-screen text-center flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-transparent -z-10" />
        
        <div className="container text-foreground z-10">
          <div className="flex items-center justify-center gap-4">
            <Gem className="h-10 w-10 text-accent" />
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-accent">
              Gangotri Jewellers & Arts
            </h1>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-body">
            Where Tradition Meets Timeless Brilliance
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <Link href="/shop">Explore Collections</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/atelier">Book an Atelier</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background z-10 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-center font-headline text-4xl font-bold text-primary">
              Living Lookbook
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Discover inspiration in our curated looks, a blend of timeless elegance and modern style.
            </p>
          </div>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {lookbookProducts.map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="relative group aspect-square overflow-hidden rounded-lg bg-secondary">
                      <Image 
                        src={`https://placehold.co/800x800.png`} 
                        alt="Lookbook" 
                        width={800} 
                        height={800} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="model jewelry editorial"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button>Shop this Look</Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card z-10 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-center font-headline text-4xl font-bold text-primary">
              Featured Craftworks
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Handpicked from our most beloved collections, these pieces represent the pinnacle of our craft.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24 z-10 relative">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-4xl font-bold text-primary">Heritage & Craftsmanship</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        For generations, Gangotri Jewellers & Arts has been synonymous with artistry and trust. Our master craftsmen blend age-old techniques with contemporary design to create jewellery that is not just an accessory, but a legacy.
                    </p>
                     <p className="mt-4 text-muted-foreground text-lg">
                        Every gemstone is ethically sourced and meticulously set, ensuring that each piece tells a story of unparalleled quality.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <Image src="https://placehold.co/400x500.png" alt="Artisan crafting jewelry" width={400} height={500} className="rounded-lg object-cover shadow-lg" data-ai-hint="artisan jewelry making" />
                     <Image src="https://placehold.co/400x500.png" alt="Intricate gold design" width={400} height={500} className="rounded-lg object-cover shadow-lg mt-8" data-ai-hint="gold design intricate" />
                </div>
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-card z-10 relative">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-4xl font-bold text-primary">
            What Our Patrons Say
          </h2>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-accent mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                 </div>
                 <p className="text-muted-foreground">"The most exquisite necklace I have ever owned. The craftsmanship is simply breathtaking. A true heirloom piece."</p>
                 <p className="font-bold text-primary mt-4">- Priya S.</p>
            </div>
             <div className="bg-background border rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-accent mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                 </div>
                 <p className="text-muted-foreground">"From the moment I walked in, I was treated like royalty. Their collection is vast and stunning. Found the perfect ring!"</p>
                 <p className="font-bold text-primary mt-4">- Rahul M.</p>
            </div>
             <div className="bg-background border rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-accent mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                 </div>
                 <p className="text-muted-foreground">"An experience of a lifetime. The team at Gangotri helped me customize my bridal set. It's more beautiful than I imagined."</p>
                 <p className="font-bold text-primary mt-4">- Anjali D.</p>
            </div>
           </div>
        </div>
       </section>
    </>
  );
}
