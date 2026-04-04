import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';
import Image from 'next/image';

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
          <div className="fixed bottom-6 right-6 z-[200] pointer-events-none sm:pointer-events-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image 
                src="https://alekhya-anantapantula.vercel.app/_next/image?url=https%3A%2F%2Fi.imgur.com%2FdErpdLj.png&w=48&q=75" 
                alt="Branding Icon" 
                width={48} 
                height={48} 
                className="w-10 h-10 md:w-12 md:h-12 drop-shadow-2xl relative"
              />
            </div>
          </div>

          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
