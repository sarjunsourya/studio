import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Divine Kitchen | Authentic Homemade Meals',
  description: 'Home-Cooked Goodness by Roopa Gokul in Delft. Authentic homemade meals, crafted fresh with love.',
};

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <div className="w-full bg-foreground py-8 border-t border-white/5">
            <div className="container mx-auto flex flex-col items-center justify-center text-xs tracking-[0.2em] uppercase text-muted-foreground/60 space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <span className="opacity-60">Crafted By</span>
                    <Link 
                      href="https://www.sarjunsourya.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-white hover:text-primary transition-all flex items-center gap-3 group"
                    >
                      <Image 
                          src="https://i.imgur.com/FtqBAlG.png" 
                          alt="Arjun Sourya Srirangam Logo"
                          width={18}
                          height={18}
                          className="grayscale group-hover:grayscale-0 transition-all"
                      />
                      sarjunsourya.com
                    </Link>
                    <span className="hidden md:inline-block text-white/20">•</span>
                    <span className="text-white/80">Brand Design</span>
                    <span className="hidden md:inline-block text-white/20">•</span>
                    <span className="text-white/80">Website Development ✨</span>
                </div>
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
