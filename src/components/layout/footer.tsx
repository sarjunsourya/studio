import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Authentic homemade meals, crafted fresh with love.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://wa.me/31000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@the-divine-kitchen.com" className="text-muted-foreground transition-colors hover:text-primary">
                  info@the-divine-kitchen.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Delft, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Divine Kitchen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
