import Image from 'next/image';
import Link from 'next/link';
import type { MenuItem } from '@/lib/data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { EggOff, ArrowRight, Leaf } from 'lucide-react';

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group glass-card overflow-hidden transition-all duration-500 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.image.imageUrl}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
            <Badge className="bg-primary text-primary-foreground border-none px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
                {item.category}
            </Badge>
            <Badge variant="outline" className="bg-accent/90 backdrop-blur-md border-none px-3 py-1 text-white">
                <Leaf className="w-3 h-3 mr-1" />
                Vegetarian
            </Badge>
            {item.category === 'Tea Cake' && (
                <Badge variant="outline" className="bg-white/90 backdrop-blur-md border-none px-3 py-1 text-background">
                    <EggOff className="w-3 h-3 mr-1 text-accent" />
                    Eggless
                </Badge>
            )}
        </div>
      </div>
      
      <div className="flex flex-col p-8">
        <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline text-2xl font-semibold text-foreground leading-tight">{item.name}</h3>
            <span className="text-xl font-bold text-primary">{item.price}</span>
        </div>
        
        <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2 mb-6">{item.description}</p>
        
        <div className="flex flex-col gap-4">
          <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-white hover:text-background transition-all rounded-xl font-bold luxury-button border-none">
            <Link href={`/order?dish=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`}>Order Now</Link>
          </Button>
          
          <Link 
            href={`/contact?dish=${encodeURIComponent(item.name)}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group/link"
          >
              <span>Want to know more about this dish?</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
