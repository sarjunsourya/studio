
import Image from 'next/image';
import Link from 'next/link';
import type { MenuItem } from '@/lib/data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Leaf, EggOff } from 'lucide-react';

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
    <div className="glass-card flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image
          src={item.image.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          data-ai-hint={item.image.imageHint}
        />
        <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
            <Badge 
                variant={getBadgeVariant(item.category)} 
            >
                {item.category}
            </Badge>
            {item.category === 'Tea Cake' && (
                <Badge
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm"
                >
                    <EggOff className="w-3 h-3 mr-1 text-primary" />
                    Eggless
                </Badge>
            )}
             <Badge 
                variant="outline"
                className="bg-background/80 backdrop-blur-sm"
            >
                <Leaf className="w-3 h-3 mr-1 text-primary" />
                Vegetarian
            </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-headline text-xl font-semibold text-foreground">{item.name}</h3>
        <p className="mt-2 flex-grow text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">{item.price}</span>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={`/order?dish=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}`}>Order Inquiry</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
