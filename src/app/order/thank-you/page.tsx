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
    <div className="min-h-screen bg-secondary/30 py-16 md:py-24 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-10 md:p-16 text-center space-y-10 border-primary/20">
          <div className="flex justify-center">
            <Logo className="scale-110 mb-4" />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-white">
              Thank You, <span className="text-primary">{name}</span>!
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Your order has been received and is being prepared with love.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="glass-card-dark p-6 border-primary/10 flex flex-col items-center justify-center">
                <Hash className="h-5 w-5 text-primary mb-2" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Order #</span>
                <span className="text-2xl font-bold text-white tracking-[0.2em]">{orderNumber}</span>
             </div>
             <div className="glass-card-dark p-6 border-primary/10 flex flex-col items-center justify-center">
                <Clock className="h-5 w-5 text-primary mb-2" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Estimated Ready</span>
                <span className="text-2xl font-bold text-white">{estimatedTime}</span>
             </div>
          </div>

          <div className="glass-card-dark p-8 border-white/5 space-y-6 text-left">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Order Summary</h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-foreground font-semibold text-lg">{dish}</span>
                        <span className="text-muted-foreground text-sm">Quantity: {quantity}</span>
                    </div>
                    <span className="text-xl font-bold text-white">€{total}</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-xs text-primary/80 leading-relaxed italic">
                        "We will contact you shortly to confirm the details. Payment is required upon delivery or pickup (Cash or Tikkie)."
                    </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="flex-1 bg-primary text-background font-bold h-14 rounded-2xl luxury-button border-none">
              <Link href="/"><Home className="mr-2 h-5 w-5" /> Back Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 border-white/10 text-white hover:bg-white/5 h-14 rounded-2xl luxury-button">
              <Link href="/menu"><Utensils className="mr-2 h-5 w-5" /> View Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-secondary/30 flex items-center justify-center"><p className="text-primary animate-pulse">Processing your gratitude...</p></div>}>
      <ThankYouContent />
    </Suspense>
  );
}
