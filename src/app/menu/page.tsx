import { weeklyMenu } from '@/lib/data';
import { MenuCard } from '@/components/menu-card';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Weekly Menu
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Delicious, home-cooked meals available for order.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {weeklyMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
