"use client";

import { useState } from 'react';
import { weeklyMenu, type MenuItem } from '@/lib/data';
import { MenuCard } from '@/components/menu-card';
import { Button } from '@/components/ui/button';

type Filter = 'All' | 'Vegetarian' | 'Non-Vegetarian' | 'Vegan';

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filters: Filter[] = ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan'];

  const filteredMenu = weeklyMenu.filter(item => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    Weekly Menu
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Freshly prepared dishes available this week. Inquire to order.
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-10">
                {filters.map(filter => (
                    <Button
                        key={filter}
                        variant={activeFilter === filter ? 'default' : 'outline'}
                        onClick={() => setActiveFilter(filter)}
                        className="rounded-full"
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredMenu.map(item => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
             {filteredMenu.length === 0 && (
                <div className="text-center col-span-full py-16">
                    <p className="text-muted-foreground">No dishes match the selected filter.</p>
                </div>
             )}
        </div>
    </div>
  );
}
