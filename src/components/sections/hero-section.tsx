import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center space-y-6 p-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl">
            <Logo className="text-4xl md:text-6xl text-primary drop-shadow-lg" />
            <p className="mt-4 text-lg md:text-xl font-medium tracking-wide">
            Home-Cooked Goodness by Roopa Gokul in Delft
            </p>
            <p className="mt-2 text-md md:text-lg text-neutral-200">
            Authentic homemade meals, crafted fresh with love.
            </p>
        </div>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
            <Link href="/menu">View Weekly Menu</Link>
        </Button>
      </div>
    </section>
  );
}
