import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[85vh] md:h-[100vh] w-full flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover scale-105 animate-pulse transition-transform duration-[10s] hover:scale-100"
          priority
          data-ai-hint="luxury fine dining food background"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      
      <div className="relative z-10 flex flex-col items-center space-y-12 p-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          <span className="text-accent uppercase tracking-[0.4em] text-sm font-semibold opacity-90">Authentic Heritage · Modern Craft</span>
          <h1 className="font-headline text-6xl md:text-9xl text-white font-normal leading-tight drop-shadow-2xl">
            The <span className="italic text-primary">Divine</span> Kitchen
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light tracking-wide text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Where ancestral recipes meet a minimalist vision of flavor.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-16 px-12 rounded-full luxury-button shadow-[0_0_30px_rgba(63,174,73,0.3)]">
                <Link href="/menu">Explore Weekly Menu</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 backdrop-blur-md font-bold text-lg h-16 px-12 rounded-full luxury-button">
                <Link href="/catering">Private Catering</Link>
            </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}