
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/logo";
import { ShieldAlert, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminGatePage() {
  const [pin, setPin] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleVerify = () => {
    if (pin === "9817") {
      setIsVerifying(true);
      toast({
        title: "Access Granted",
        description: "Redirecting to primary authentication...",
      });
      // Redirect to the randomized login route
      setTimeout(() => {
        router.push("/secure-dashboard-x7K9pL2vQ8Rz/login");
      }, 800);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Access Code",
        description: "The provided PIN is incorrect.",
      });
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-10 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Logo className="scale-125" />
          <div className="space-y-2">
            <h1 className="text-2xl font-headline font-bold text-white flex items-center justify-center gap-2">
              <ShieldAlert className="h-6 w-6 text-primary" />
              Restricted Area
            </h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
              Security Stage 1: Entry PIN Required
            </p>
          </div>
        </div>

        <div className="glass-card p-10 border-primary/10">
          <div className="space-y-6">
            <div className="space-y-4">
              <Input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                className="bg-background/50 border-white/10 text-center text-4xl tracking-[0.5em] font-bold h-20 rounded-2xl focus:ring-primary"
                placeholder="****"
              />
              <p className="text-[10px] text-muted-foreground italic">
                Enter your 4-digit secure access code
              </p>
            </div>
            
            <Button
              onClick={handleVerify}
              disabled={pin.length !== 4 || isVerifying}
              className="w-full bg-primary text-background font-bold h-14 rounded-2xl luxury-button border-none text-lg"
            >
              {isVerifying ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <>VERIFY ACCESS <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
          </div>
        </div>

        <p className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.4em]">
          System monitored by Divine Security Protocols
        </p>
      </div>
    </div>
  );
}
