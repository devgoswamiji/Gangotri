import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data';
import { ShieldCheck, Truck, Gem, Star } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className="relative w-full text-center overflow-hidden bg-gradient-to-b from-background to-amber-50/50 pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
        <div className="container text-foreground">
          <h1 className="font-headline text-5xl font-bold md:text-7xl text-primary">
            Where Tradition Meets Timeless Elegance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            Discover exquisite collections, handcrafted with passion and precision.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x800.png" alt="Diamond Necklace" width={600} height={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint="diamond necklace velvet" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <h3 className="font-headline text-3xl text-white font-bold">Necklaces</h3>
                </div>
            </div>
             <div className="relative group overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x800.png" alt="Gold Bangles" width={600} height={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint="gold bangles velvet" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <h3 className="font-headline text-3xl text-white font-bold">Bangles</h3>
                </div>
            </div>
             <div className="relative group overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x800.png" alt="Engagement Rings" width={600} height={800} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint="engagement ring velvet" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <h3 className="font-headline text-3xl text-white font-bold">Rings</h3>
                </div>
            </div>
          </div>
           <Button asChild size="lg" className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/shop">Explore Collections</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-4xl font-bold text-primary">
            Featured Collections
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

       <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-center font-headline text-4xl font-bold text-primary">
            What Our Patrons Say
          </h2>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border/50 rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-yellow-400 mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                 </div>
                 <p className="text-muted-foreground">"The most exquisite necklace I have ever owned. The craftsmanship is simply breathtaking. A true heirloom piece."</p>
                 <p className="font-bold text-primary mt-4">- Priya S.</p>
            </div>
             <div className="bg-card border border-border/50 rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-yellow-400 mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                 </div>
                 <p className="text-muted-foreground">"From the moment I walked in, I was treated like royalty. Their collection is vast and stunning. Found the perfect ring!"</p>
                 <p className="font-bold text-primary mt-4">- Rahul M.</p>
            </div>
             <div className="bg-card border border-border/50 rounded-lg p-6 text-center shadow-lg">
                 <div className="flex justify-center text-yellow-400 mb-4">
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
