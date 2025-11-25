"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-24 items-center">
        <div className="flex-1 flex justify-start">
          <Logo />
        </div>
        
        <nav className="hidden items-center justify-center text-sm font-semibold md:flex flex-1">
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-md transition-colors hover:bg-primary/10 hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/60"
                )}
              >
                <link.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden sm:flex rounded-full font-bold">
             <Link href="/contact">Contact Us</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="p-4 flex justify-center">
                <Logo />
              </div>
              <div className="grid gap-4 py-6 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex w-full items-center py-2 text-lg font-semibold transition-colors hover:text-primary gap-4",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
                 <Button asChild size="lg" className="mt-6 rounded-full font-bold">
                    <Link href="/contact">Contact Us</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
