
import Image from 'next/image';
import { Heart, MessageCircle } from 'lucide-react';
import type { InstagramPost } from '@/lib/data';

export function InstagramPostCard({ post }: { post: InstagramPost }) {
  return (
    <div className="group relative block w-full aspect-square overflow-hidden rounded-lg shadow-lg">
      <Image
        src={post.image.imageUrl}
        alt={post.caption}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={post.image.imageHint}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="text-white text-center">
            <div className="flex items-center justify-center gap-6 mb-4">
                 <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    <span className="font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold">{post.comments}</span>
                </div>
            </div>
            <p className="text-sm hidden sm:block">{post.caption}</p>
        </div>
      </div>
    </div>
  );
}
