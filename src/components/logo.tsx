import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-headline font-bold text-2xl tracking-tight text-primary flex items-center gap-2",
        className
      )}
    >
      <Sparkles className="h-6 w-6 text-accent" />
      The Divine Kitchen
    </Link>
  );
}
