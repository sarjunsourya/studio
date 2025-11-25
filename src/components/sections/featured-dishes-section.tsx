import Image from 'next/image';
import Link from 'next/link';
import { featuredDishes } from '@/lib/data';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight } from 'lucide-react';

export function FeaturedDishesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Our Featured Dishes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the authentic flavors we offer.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={dish.image.imageUrl}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={dish.image.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-xl">{dish.name}</CardTitle>
                <CardDescription className="mt-2">{dish.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                <Link href="/gallery">
                    Explore Our Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
