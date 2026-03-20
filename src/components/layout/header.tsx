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
    <header className="fixed top-0 z-[100] w-full px-4 py-6">
      <div className="container mx-auto">
        <div className="glass-card h-20 md:h-24 px-6 md:px-10 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Logo className="scale-75 md:scale-90 origin-left" />
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#F3C654]" />
                  )}
                </Link>
              ))}
            </div>
          </nav>
          
          <div className="flex-1 flex items-center justify-end gap-4">
            <Button asChild className="hidden sm:flex bg-foreground text-white hover:bg-primary hover:text-foreground transition-all rounded-full px-8 font-bold uppercase text-[10px] tracking-widest luxury-button">
               <Link href="/menu">Order Menu</Link>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-primary/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md p-10 glass-card-dark border-none">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-16">
                      <Logo className="scale-75 origin-left" />
                    </div>
                    
                    <div className="flex flex-col gap-10">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "text-5xl font-headline font-bold transition-all hover:translate-x-4 hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-white"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="mt-auto pt-10 border-t border-white/10">
                       <Button asChild size="lg" className="w-full h-16 rounded-2xl bg-primary text-foreground font-bold luxury-button text-lg">
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
