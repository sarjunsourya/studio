
"use client";

import { usePathname } from "next/navigation";
import { Plane, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function VacationOverlay({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the user is on the special contact page, allow them to see it
  if (pathname === "/vacation-contact") {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <div className="fixed inset-0 z-[500] bg-[#051917] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl space-y-8 md:space-y-12"
      >
        <div className="flex flex-col items-center space-y-6">
          <Logo className="scale-110 md:scale-125" />
          <div className="relative">
            <div className="bg-primary/10 p-5 rounded-full border border-primary/20 animate-pulse">
                <Plane className="h-10 w-10 md:h-14 md:w-14 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 bg-accent h-4 w-4 rounded-full border-2 border-[#051917]" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-headline text-4xl md:text-7xl font-bold text-white tracking-tight">
            Vacation <span className="text-primary italic">Mode</span>
          </h1>
          <p className="text-primary text-[10px] md:text-sm uppercase tracking-[0.5em] font-bold">
            Recharging Soul & Science
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 border-primary/10 max-w-xl mx-auto">
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic">
            "Our kitchen is currently taking a short break to gather fresh inspiration and spices. We are on a culinary journey to bring even more authentic flavors back to your table soon."
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-muted-foreground text-sm uppercase tracking-widest font-bold">
                <Calendar className="h-4 w-4 text-primary" />
                Returning Soon
            </div>
            
            <p className="text-white/60 text-sm">
                While the kitchen is closed, we are still listening. Feel free to leave a message for our return.
            </p>

            <Button asChild size="lg" className="bg-primary text-background font-bold h-14 px-10 rounded-2xl luxury-button border-none">
              <Link href="/vacation-contact" className="flex items-center gap-2">
                CONTACT US <MessageSquare className="h-5 w-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        <footer className="pt-8">
             <p className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.4em]">
                The Divine Kitchen • Delft • Authentic Excellence
             </p>
        </footer>
      </motion.div>
    </div>
  );
}
