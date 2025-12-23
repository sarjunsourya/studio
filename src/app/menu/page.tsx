import { MenuCard } from '@/components/menu-card';
import { southIndianMenu, teaCakesMenu } from '@/lib/data';
import { Utensils, Cake } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Menu
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover a taste of authentic, home-cooked Indian cuisine. All dishes are prepared with the freshest ingredients and a touch of love.
          </p>
        </div>

        {/* South Indian Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Utensils className="h-8 w-8 text-accent" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              South Indian Delights
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {southIndianMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Eggless Tea Cakes Section */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Cake className="h-8 w-8 text-accent" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
              Eggless Tea Cakes (500g)
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teaCakesMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
