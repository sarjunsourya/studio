import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover scale-110 animate-pulse transition-transform duration-[20s] hover:scale-100"
            priority
            data-ai-hint="luxury fine dining food background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center space-y-12 animate-fade-in">
        <div className="space-y-6">
          <div className="relative inline-block mb-4">
             <Image 
                src="https://i.imgur.com/REENKrh.jpeg" 
                alt="The Divine Kitchen Logo" 
                width={180} 
                height={180} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-2xl"
                priority
              />
          </div>
          
          <div className="space-y-2">
            <h1 className="font-headline text-5xl md:text-8xl text-white font-bold leading-tight drop-shadow-lg">
              The <span className="text-primary italic">Divine</span> Kitchen
            </h1>
            <p className="text-primary text-sm md:text-lg uppercase tracking-[0.5em] font-semibold">
              Home-Cooked Goodness by Roopa Gokul in Delft
            </p>
          </div>
          
          <p className="mt-8 text-xl md:text-2xl font-light tracking-wide text-white/80 max-w-2xl mx-auto leading-relaxed italic">
            "Authentic homemade meals, crafted fresh with love"
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 pt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-bold text-lg h-16 px-12 rounded-full luxury-button">
                <Link href="/menu">Explore Weekly Menu</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 backdrop-blur-md font-bold text-lg h-16 px-12 rounded-full luxury-button">
                <Link href="/catering">Private Catering</Link>
            </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60">
           <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
