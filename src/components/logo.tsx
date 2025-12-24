import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      <Image 
        src="https://i.imgur.com/REENKrh.jpeg" 
        alt="The Divine Kitchen Logo" 
        width={150} 
        height={150} 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        priority
      />
    </Link>
  );
}
