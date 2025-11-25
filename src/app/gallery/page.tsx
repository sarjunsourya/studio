import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    Our Gallery
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    A feast for your eyes. Discover the passion behind our plates.
                </p>
            </div>

            {galleryImages.length > 0 ? (
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid group">
                            <Image
                                src={image.imageUrl}
                                alt={image.description || 'Gallery image'}
                                width={500}
                                height={700}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-xl">The gallery is currently empty. Check back soon!</p>
                </div>
            )}
        </div>
    </div>
  );
}
