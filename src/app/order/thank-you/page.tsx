"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Home, Utensils, Hash, Clock } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Guest";
  const dish = searchParams.get("dish") || "Unknown Dish";
  const quantity = searchParams.get("quantity") || "0";
  const total = searchParams.get("total") || "0.00";
  const orderNumber = searchParams.get("orderNumber") || "N/A";
  const estimatedTime = searchParams.get("estimatedTime") || "Calculating...";

  return (
    <div className="min-h-screen bg-secondary/30 py-6 sm:py-12 md:py-24 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-6 sm:p-10 md:p-16 text-center space-y-6 sm:space-y-8 md:space-y-10 border-primary/20">
          <div className="flex justify-center">
            <Logo className="scale-75 sm:scale-90 md:scale-110 mb-0 md:mb-4" />
          </div>
          
          <div className="space-y-2 sm:space-y-4">
            <div className="flex justify-center">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-xl sm:text-3xl md:text-5xl font-bold text-white px-2">
              Thank You, <span className="text-primary">{name}</span>!
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground font-light max-w-[280px] sm:max-w-none mx-auto">
              Your order has been received and is being prepared with love.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
             <div className="glass-card-dark p-4 sm:p-5 md:p-6 border-primary/10 flex flex-col items-center justify-center">
                <Hash className="h-4 w-4 md:h-5 md:w-5 text-primary mb-1 md:mb-2" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Order #</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-[0.2em]">{orderNumber}</span>
             </div>
             <div className="glass-card-dark p-4 sm:p-5 md:p-6 border-primary/10 flex flex-col items-center justify-center">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary mb-1 md:mb-2" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Estimated Ready</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{estimatedTime}</span>
             </div>
          </div>

          <div className="glass-card-dark p-4 sm:p-6 md:p-8 border-white/5 space-y-4 sm:space-y-6 text-left">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[10px] md:text-xs">Order Summary</h2>
            <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-foreground font-semibold text-sm sm:text-base md:text-lg truncate max-w-[140px] sm:max-w-none">{dish}</span>
                        <span className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">Quantity: {quantity}</span>
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">€{total}</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="bg-primary/5 p-3 sm:p-4 rounded-xl border border-primary/10">
                    <p className="text-[9px] sm:text-[11px] md:text-xs text-primary/80 leading-relaxed italic text-center sm:text-left">
                        "We will contact you shortly to confirm. Payment is required upon delivery or pickup (Cash or Tikkie)."
                    </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6">
            <Button asChild size="lg" className="flex-1 bg-primary text-background font-bold h-12 md:h-14 rounded-2xl luxury-button border-none text-xs sm:text-sm md:text-base">
              <Link href="/"><Home className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Back Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 border-white/10 text-white hover:bg-white/5 h-12 md:h-14 rounded-2xl luxury-button text-xs sm:text-sm md:text-base">
              <Link href="/menu"><Utensils className="mr-2 h-4 w-4 md:h-5 md:w-5" /> View Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-secondary/30 flex items-center justify-center"><p className="text-primary animate-pulse uppercase tracking-widest text-xs">Processing your gratitude...</p></div>}>
      <ThankYouContent />
    </Suspense>
  );
}
