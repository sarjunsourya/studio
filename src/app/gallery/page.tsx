
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = ['Thali/Assortment', 'Sweet', 'Savory', 'Mixed'];

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
        
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {/* Images for this category will be added here */}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
