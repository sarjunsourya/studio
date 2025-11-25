import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-headline font-bold text-2xl tracking-tight text-primary",
        className
      )}
    >
      The Divine Kitchen
    </Link>
  );
}
