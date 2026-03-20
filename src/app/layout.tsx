import type { Metadata } from 'next';
import { Alegreya, Belleza } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Divine Kitchen | Luxury Home Cooking',
  description: 'Authentic South Indian flavors and eggless delights by Roopa Gokul in Delft. High-end home catering and weekly menus.',
};

const fontBody = Alegreya({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Belleza({
  subsets: ['latin'],
  weight: ['400'],
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
        <main className="flex-grow">{children}</main>
        <Footer />
        <div className="w-full bg-background py-6 border-t border-border/50">
            <div className="container mx-auto flex flex-col items-center justify-center text-xs tracking-widest uppercase text-muted-foreground space-y-3">
                <div className="flex items-center gap-2">
                    <span className="opacity-60">Crafted By</span>
                    <Link 
                      href="https://www.sarjunsourya.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-foreground hover:text-primary transition-all flex items-center gap-2 group"
                    >
                      <Image 
                          src="https://i.imgur.com/FtqBAlG.png" 
                          alt="Arjun Sourya Srirangam Logo"
                          width={16}
                          height={16}
                          className="grayscale group-hover:grayscale-0 transition-all"
                      />
                      sarjunsourya.com
                    </Link>
                </div>
                <div className="flex items-center gap-4 opacity-40">
                    <span>Brand Design</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>Website Development ✨</span>
                </div>
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}