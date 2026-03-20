import Image from 'next/image';
import Link from 'next/link';
import type { MenuItem } from '@/lib/data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Leaf, EggOff, ArrowRight } from 'lucide-react';

export function MenuCard({ item }: { item: MenuItem }) {
  const getBadgeVariant = (category: MenuItem['category']) => {
    switch (category) {
      case 'South Indian':
        return 'default';
      case 'Tea Cake':
        return 'secondary';
      case 'Vegan':
        return 'outline';
      default:
        return 'destructive';
    }
  }

  return (
    <div className="group relative bg-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border/50">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.image.imageUrl}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint="gourmet plated indian food fine dining"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
            <Badge className="bg-primary/90 backdrop-blur-md border-none px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
                {item.category}
            </Badge>
            {item.category === 'Tea Cake' && (
                <Badge variant="outline" className="bg-white/80 backdrop-blur-md border-none px-3 py-1">
                    <EggOff className="w-3 h-3 mr-1 text-primary" />
                    Eggless
                </Badge>
            )}
        </div>
      </div>
      
      <div className="flex flex-col p-8">
        <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline text-2xl font-normal text-foreground leading-tight tracking-tight">{item.name}</h3>
            <span className="text-xl font-bold text-primary">{item.price}</span>
        </div>
        
        <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2 mb-6">{item.description}</p>
        
        <div className="flex flex-col gap-4">
          <Button asChild size="lg" className="w-full bg-foreground text-background hover:bg-primary transition-colors rounded-xl font-bold luxury-button">
            <Link href={`/order?dish=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`}>Place Order Inquiry</Link>
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