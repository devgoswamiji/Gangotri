import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { PageTransition } from '@/components/layout/page-transition';

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background relative">
      <div id="golden-particles" />
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
