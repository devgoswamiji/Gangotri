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
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/lookbook', label: 'Lookbook' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-6 text-sm font-medium text-foreground/80', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'hover:text-accent transition-colors',
            pathname === link.href && 'text-accent font-semibold'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-accent" />
          <span className="font-headline text-2xl font-bold tracking-tight text-accent">
            Gangotri Jewellers
          </span>
        </Link>
        <div className="hidden md:flex flex-1 justify-center">
            <NavLinks />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
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
                        <Gem className="h-6 w-6 text-accent" />
                        <span className="font-headline text-2xl font-bold tracking-tight text-accent">
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
