
import { ImageGallery } from '@/components/image-gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A visual taste of The Divine Kitchen.
          </p>
        </div>
        
        <ImageGallery />
      </div>
    </div>
  );
}

    