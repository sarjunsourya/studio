import { GalleryHorizontalEnd } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="glass-card p-8 md:p-12">
            <GalleryHorizontalEnd className="h-16 w-16 mx-auto text-primary" />
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-6">
                Photo Gallery Coming Soon!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                We're currently curating a beautiful collection of photos of our food. Please check back soon!
            </p>
        </div>
      </div>
    </div>
  );
}
