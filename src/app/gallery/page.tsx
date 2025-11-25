import { InstagramEmbed } from '@/components/instagram-embed';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Instagram Stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into our latest updates and behind-the-scenes moments.
          </p>
        </div>
        <InstagramEmbed />
      </div>
    </div>
  );
}
