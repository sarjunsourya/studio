"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-[100] w-full transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="bg-background/80 backdrop-blur-2xl border border-border/40 rounded-full px-6 md:px-10 h-20 md:h-24 flex items-center justify-between shadow-2xl">
          <div className="flex-1 flex justify-start">
            <Logo className="scale-75 md:scale-100 origin-left" />
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </nav>
          
          <div className="flex-1 flex items-center justify-end gap-4">
            <Button asChild className="hidden sm:flex bg-foreground text-background hover:bg-primary transition-colors rounded-full px-8 font-bold uppercase text-[10px] tracking-widest luxury-button">
               <Link href="/menu">Order Menu</Link>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-primary/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md p-10 bg-background/95 backdrop-blur-2xl border-none">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                      <Logo className="scale-75 origin-left" />
                    </div>
                    
                    <div className="flex flex-col gap-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "text-4xl font-headline transition-all hover:translate-x-4 hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-10 border-t border-border/50">
                       <Button asChild size="lg" className="w-full h-16 rounded-2xl bg-primary text-white font-bold luxury-button text-lg">
                          <Link href="/menu">Order Now</Link>
                       </Button>
                    </div>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}