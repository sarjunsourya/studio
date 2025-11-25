import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 flex flex-col items-center space-y-8 p-4 max-w-4xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl text-primary-foreground font-bold drop-shadow-2xl">
          The Divine Kitchen
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium tracking-wide text-neutral-200 max-w-2xl">
          Real food, true flavours, and the comfort of home in every bite.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-7 px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                <Link href="/menu">View Weekly Menu</Link>
            </Button>
             <Button asChild size="lg" variant="secondary" className="font-bold text-lg py-7 px-10 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
                <Link href="/catering">Catering Inquiry</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
