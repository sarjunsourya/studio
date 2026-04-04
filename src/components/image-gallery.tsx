
"use client";

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const categories = ['Sweet', 'Savory', 'Thali/Assortment', 'Mixed'];

export function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState('Sweet');
  const galleryImages = useMemo(() => PlaceHolderImages.filter(img => img.id.startsWith('gallery-')), []);

  const filteredImages = useMemo(() => 
    galleryImages.filter((image) => image.category === activeCategory),
  [galleryImages, activeCategory]);

  return (
    <div className="space-y-8 md:space-y-12">
      <Tabs defaultValue="Sweet" onValueChange={setActiveCategory} className="w-full">
        <div className="flex justify-center mb-8 md:mb-12 px-4">
          <ScrollArea className="w-full whitespace-nowrap md:w-auto">
            <TabsList className="bg-transparent border border-white/10 p-1 rounded-full backdrop-blur-md h-auto gap-2 inline-flex">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="rounded-full px-5 md:px-8 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-500"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
        
        <AnimatePresence mode="wait">
          <TabsContent key={activeCategory} value={activeCategory} className="mt-0 px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "grid gap-6 md:gap-8",
                filteredImages.length === 1 
                  ? "grid-cols-1 max-w-sm mx-auto" 
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden group relative bg-transparent border-none shadow-none rounded-[1.5rem] md:rounded-[2rem]">
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] w-full overflow-hidden relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                          <span className="text-primary text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-1 md:mb-2 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {image.category}
                          </span>
                          <h3 className="text-white text-lg md:text-2xl font-headline font-semibold translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                            {image.description}
                          </h3>
                        </div>
                        {/* High-tech border glow */}
                        <div className="absolute inset-0 border border-white/10 group-hover:border-primary/30 transition-colors duration-500 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            {filteredImages.length === 0 && (
              <div className="text-center py-20 md:py-24 glass-card border-white/5 mx-4">
                <p className="text-muted-foreground uppercase tracking-widest text-xs">No images in this collection yet.</p>
              </div>
            )}
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
