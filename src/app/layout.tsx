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
  title: 'The Divine Kitchen',
  description: 'Home-Cooked Goodness by Roopa Gokul in Delft',
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
        <div className="w-full bg-secondary/50 py-3">
            <div className="container mx-auto flex items-center justify-center text-sm text-muted-foreground">
                <span>This website is made with love by</span>
                <Image 
                    src="https://i.imgur.com/FtqBAlG.png" 
                    alt="Arjun Sourya Srirangam's logo"
                    width={20}
                    height={20}
                    className="mx-2"
                />
                <Link href="https://www.sarjunsourya.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">
                  Arjun Sourya Srirangam.
                </Link>
            </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
