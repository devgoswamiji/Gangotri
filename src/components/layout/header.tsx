"use client";
import Link from 'next/link';
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  Gem,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/shop', label: 'SHOP' },
  { href: '/collections', label: 'COLLECTIONS' },
  { href: '/lookbook', label: 'LOOKBOOK' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-8 text-sm font-medium text-foreground/80 tracking-wider', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'relative group hover:text-primary transition-colors pb-1',
            pathname === link.href && 'text-primary font-semibold'
          )}
        >
          {link.label}
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm shadow-sm">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-100 to-transparent" />
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Gem className="h-7 w-7 text-primary group-hover:animate-pulse" />
          <span className="font-headline text-3xl font-bold tracking-tight text-primary">
            Gangotri Jewellers
          </span>
        </Link>
        <div className="hidden md:flex flex-1 justify-center">
            <NavLinks />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex text-foreground/60 hover:text-primary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex text-foreground/60 hover:text-primary">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping Bag</span>
          </Button>
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
                            Gangotri Jewellers
                        </span>
                    </Link>
                    <NavLinks className="flex-col !items-start gap-4 text-lg" />
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
