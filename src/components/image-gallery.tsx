"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['Thali/Assortment', 'Sweet', 'Savory', 'Mixed'];

export function ImageGallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <Tabs defaultValue="Thali/Assortment" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {galleryImages
              .filter((image) => image.category === category)
              .map((image) => (
                <Card key={image.id} className="overflow-hidden group relative">
                    <CardContent className="p-0">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                width={400}
                                height={400}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p className="text-white text-center font-semibold">{image.description}</p>
                        </div>
                    </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

    