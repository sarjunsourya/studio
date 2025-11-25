import Link from "next/link";
import { Logo } from "../logo";
import { navLinks } from "@/lib/data";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start">
          <div className="flex justify-center md:col-span-4">
            <Logo />
          </div>
          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-semibold">Sitemap</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <link.icon className="h-4 w-4 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@the-divine-kitchen.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  info@the-divine-kitchen.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-primary" />
                <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  Instagram
                </a>
              </li>
               <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-accent" />
                <a href="https://wa.me/31621308998" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
           <div className="md:col-span-3">
            <h3 className="font-headline text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary"/>
                Our Location
            </h3>
             <address className="mt-4 not-italic text-sm text-muted-foreground">
                Raad van Europalaan 62<br />
                2625PC Delft, Netherlands
                <p className="text-xs mt-2">(Pick-up only location)</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Divine Kitchen. All Rights Reserved.</p>
          <p className="mt-2">Home-Cooked Goodness by Roopa Gokul</p>
        </div>
      </div>
    </footer>
  );
}
