import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';
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
        <FirebaseClientProvider>
          <Header />
          <main className="flex-grow pt-24">{children}</main>
          <Footer />
          
          {/* Persistent Branding Blob */}
          <Link 
            href="#developer-branding" 
            className="fixed bottom-6 right-6 z-[200] transition-transform hover:scale-110 active:scale-95 group hidden sm:block"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-[#0a2e2a]/80 backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image 
                src="https://alekhya-anantapantula.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FdErpdLj.png&w=48&q=75" 
                alt="Branding Icon" 
                width={32} 
                height={32} 
                className="w-7 h-7 md:w-8 md:h-8 drop-shadow-md relative"
              />
            </div>
          </Link>

          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
