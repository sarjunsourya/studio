import { Utensils } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="glass-card p-8 md:p-12">
            <Utensils className="h-16 w-16 mx-auto text-primary" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-6">
                Fresh Menu Coming Soon!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                We are busy in the kitchen preparing a delicious new weekly menu. Please check back shortly for exciting new dishes.
            </p>
        </div>
      </div>
    </div>
  );
}
