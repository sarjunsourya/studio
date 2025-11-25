import { InstagramPostCard } from '@/components/instagram-post-card';
import { instagramPosts } from '@/lib/data';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                    Our Instagram Gallery
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    A feast for your eyes. Follow us <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">@thedivinekitchen5</a>
                </p>
            </div>

            {instagramPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {instagramPosts.map((post) => (
                        <InstagramPostCard key={post.id} post={post} />
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
