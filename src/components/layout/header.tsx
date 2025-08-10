"use client";
import Link from 'next/link';
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  Heart,
  Gem,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/shop/gold', label: 'Gold' },
  { href: '/shop/diamond', label: 'Diamond' },
  { href: '/shop/earrings', label: 'Earrings' },
  { href: '/shop/rings', label: 'Rings' },
  { href: '/collections', label: 'Collections' },
  { href: '/bridal', label: 'Wedding' },
  { href: '/gifting', label: 'Gifting' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium text-foreground/80 tracking-wider', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'relative group hover:text-primary transition-colors pb-1 flex items-center gap-1.5',
            pathname === link.href && 'text-primary font-semibold'
          )}
        >
          {/* Icons could be added here if available as custom SVGs */}
          {link.label}
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
      <button className="relative group hover:text-primary transition-colors pb-1 flex items-center gap-1.5">
        More
        <ChevronDown className="h-4 w-4" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </button>
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-gradient-to-b from-white to-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 group flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Gem className="h-7 w-7 text-primary group-hover:animate-pulse" />
            <span className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-primary">
              Gangotri
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-[2_2_0%] justify-center items-center">
            <div className="relative w-full max-w-lg">
              <Input 
                type="search" 
                placeholder="Search for gold, diamonds, collections..." 
                className="rounded-full border-border/80 bg-white/50 shadow-sm pl-12 h-11 text-base placeholder:text-muted-foreground/80" 
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
        </div>
        
        <div className="flex items-center justify-end gap-2 md:gap-3 flex-1">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping Bag</span>
            </Button>
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95">
                <div className="flex flex-col gap-8 pt-12">
                     <Link href="/" className="flex items-center gap-2 mb-4">
                        <Gem className="h-6 w-6 text-primary" />
                        <span className="font-headline text-2xl font-bold tracking-tight text-primary">
                            Gangotri
                        </span>
                    </Link>
                    <NavLinks className="flex-col !items-start gap-4 text-lg" />
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden md:flex h-12 items-center justify-center border-t border-border/60">
        <NavLinks />
      </div>
    </header>
  );
}
