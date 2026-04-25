
"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VacationContactPage() {
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
              Leave a Note
            </h1>
            <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">
              We'll get back to you once we return
            </p>
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-10 border-white/5"
        >
          <form 
            action="https://formspree.io/f/xkokydwg" 
            method="POST" 
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

            {/* Hidden field for Formspree subject */}
            <input type="hidden" name="_subject" value="New Vacation Mode Inquiry" />

            <Button
              type="submit"
              className="w-full bg-primary text-background font-bold h-14 rounded-xl luxury-button border-none text-lg"
            >
              SEND MESSAGE <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
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
