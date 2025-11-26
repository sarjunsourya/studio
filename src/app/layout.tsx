import type { Metadata } from 'next';
import { Alegreya, Belleza } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'The Divine Kitchen',
  description: 'Home-Cooked Goodness by Roopa Gokul in Delft',
  icons: {
    icon: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/574602855_18067291658603001_6900762543051329758_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QEKYySM_dW_TFQQ3GKmXiqH4DDzZkiXt3FUJNLengAHIww3PD-96wtzGxUnWi_kvN2EwabDYrjSHOeXSR4KaQtG&_nc_ohc=MZ4qNakv-cIQ7kNvwEA_MPO&_nc_gid=ScsnJc6yNfHfzXn_o76EiA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfjfgLnIDmgQr4umbPfs25XXs3nlsWqhYEv82h_3_r-pFA&oe=692BD37B&_nc_sid=8b3546',
  },
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
          'min-h-screen bg-background font-body antialiased',
          fontBody.variable,
          fontHeadline.variable
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
