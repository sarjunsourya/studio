import { whyUsPoints } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function WhyUsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Why The Divine Kitchen?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference of a meal made with passion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {whyUsPoints.map((point) => (
            <Card key={point.title} className="text-center border bg-secondary/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl">
              <CardHeader className="flex items-center justify-center pt-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <point.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-headline font-semibold mb-2 text-foreground">
                  {point.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
