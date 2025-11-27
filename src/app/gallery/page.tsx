import { ImageGallery } from '@/components/image-gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Food Gallery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A taste of what we create in our kitchen.
          </p>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
}
