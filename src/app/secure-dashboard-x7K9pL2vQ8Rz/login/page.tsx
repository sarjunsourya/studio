"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { Loader2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(adminLogin, null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      router.push("/secure-dashboard-x7K9pL2vQ8Rz");
    } else if (state?.error) {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: state.error,
      });
    }
  }, [state, router, toast]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <Logo className="scale-110" />
          <div className="space-y-2">
            <h1 className="text-3xl font-headline font-bold text-white flex items-center justify-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              Secure Portal
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              Authorized Access Only
            </p>
          </div>
        </div>

        <div className="glass-card p-8 border-white/5">
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="bg-background/50 border-white/10"
                placeholder="Enter username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="bg-background/50 border-white/10"
                placeholder="••••••••"
              />
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary text-background font-bold h-12 rounded-xl luxury-button border-none"
            >
              {isPending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "AUTHENTICATE"
              )}
            </Button>
          </form>
        </div>

        <p className="text-center text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em]">
          All access attempts are logged and monitored.
        </p>
      </div>
    </div>
  );
}
