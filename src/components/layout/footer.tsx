import Link from 'next/link';
import { Gem, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Gem className="h-6 w-6 text-accent" />
              <span className="font-headline text-2xl font-bold text-accent">
                Gangotri Jewellers
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Exquisite jewellery, handcrafted with passion and precision for the modern connoisseur.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-headline text-lg font-semibold text-primary">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/collections" className="text-muted-foreground hover:text-accent">Collections</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-accent">New Arrivals</Link></li>
              <li><Link href="/bridal" className="text-muted-foreground hover:text-accent">Bridal</Link></li>
              <li><Link href="/gifts" className="text-muted-foreground hover:text-accent">Gifts</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-headline text-lg font-semibold text-primary">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/our-story" className="text-muted-foreground hover:text-accent">Our Story</Link></li>
              <li><Link href="/craftsmanship" className="text-muted-foreground hover:text-accent">Craftsmanship</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent">Contact</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-accent">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
             <h3 className="font-headline text-lg font-semibold text-primary">Newsletter</h3>
             <p className="mt-4 text-sm text-muted-foreground">Subscribe for exclusive previews and stories.</p>
             <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email address" className="bg-background border-border text-foreground placeholder-muted-foreground" />
              <Button type="submit" variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gangotri Jewellers & Arts. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-accent" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-accent" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-accent" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
