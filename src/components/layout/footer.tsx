import Link from 'next/link';
import { Gem, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <Gem className="h-6 w-6 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">
                Gangotri Jewellers
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Exquisite jewellery, handcrafted with passion and precision for the modern connoisseur.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-headline text-lg font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/collections" className="text-gray-400 hover:text-primary">Collections</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-primary">New Arrivals</Link></li>
              <li><Link href="/bridal" className="text-gray-400 hover:text-primary">Bridal</Link></li>
              <li><Link href="/gifts" className="text-gray-400 hover:text-primary">Gifts</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-headline text-lg font-semibold text-white">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/our-story" className="text-gray-400 hover:text-primary">Our Story</Link></li>
              <li><Link href="/craftsmanship" className="text-gray-400 hover:text-primary">Craftsmanship</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
             <h3 className="font-headline text-lg font-semibold text-white">Newsletter</h3>
             <p className="mt-4 text-sm text-gray-400">Subscribe for exclusive previews and stories.</p>
             <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
              <Button type="submit" variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Gangotri Jewellers & Arts. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-gray-500 hover:text-primary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-gray-500 hover:text-primary" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-gray-500 hover:text-primary" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
