
"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, Send, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function VacationContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xkokydwg", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.error("Formspree submission error:", e);
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#051917] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg space-y-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <Link href="/">
            <Logo className="scale-75 hover:scale-80 transition-transform" />
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-headline font-bold text-white flex items-center justify-center gap-3">
              <Mail className="h-7 w-7 text-primary" />
              {status === "success" ? "Note Received" : "Leave a Note"}
            </h1>
            <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">
              {status === "success" ? "Gratitude Shared" : "We'll get back to you once we return"}
            </p>
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-10 border-white/5"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-4"
              >
                <div className="flex justify-center">
                    <CheckCircle2 className="h-16 w-16 text-primary animate-pulse" />
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Your message has been safely delivered to our inbox. We appreciate your interest and will reach out personally as soon as our kitchen doors reopen.
                    </p>
                </div>
                <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 h-12 rounded-xl luxury-button">
                  <Link href="/">Return to Announcement</Link>
                </Button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="text-white/70">Full Name</Label>
                  <Input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    className="bg-background/50 border-white/10 h-12"
                    placeholder="How shall we address you?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-white/10 h-12"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="bg-background/50 border-white/10 min-h-[150px]"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <input type="hidden" name="_subject" value="New Vacation Mode Inquiry" />

                {status === "error" && (
                  <p className="text-destructive text-[10px] text-center font-bold uppercase tracking-widest animate-bounce">
                    Transmission failure. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-primary text-background font-bold h-14 rounded-xl luxury-button border-none text-lg"
                >
                  {status === "sending" ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                  ) : (
                    <>SEND MESSAGE <Send className="ml-2 h-5 w-5" /></>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
            <Link 
                href="/" 
                className="text-primary hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
                <ArrowLeft className="h-4 w-4" /> Back to Vacation Announcement
            </Link>
        </div>
      </div>
    </div>
  );
}
