import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <h3 className="font-headline text-lg font-semibold text-white mb-6">Sitemap</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-3 text-sm text-muted-foreground transition-all hover:text-primary hover:translate-x-1">
                    <link.icon className="h-4 w-4 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-headline text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:info@the-divine-kitchen.com" className="text-muted-foreground transition-colors hover:text-white">
                  info@the-divine-kitchen.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                    <Instagram className="h-4 w-4 text-primary" />
                </div>
                <div>
                    <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-white">
                    Instagram
                    </a>
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest mt-1">(Order via DM available)</p>
                </div>
              </li>
               <li className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-full">
                    <MessageCircle className="h-4 w-4 text-accent" />
                </div>
                <a href="https://wa.me/31621308998" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

           <div className="md:col-span-4">
            <h3 className="font-headline text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-primary"/>
                </div>
                Our Location
            </h3>
             <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                Raad van Europalaan 62<br />
                2625PC Delft, Netherlands
                <p className="text-[10px] uppercase tracking-[0.2em] mt-3 text-primary/60 font-bold">(Pick-up only location)</p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <div className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            &copy; {new Date().getFullYear()} The Divine Kitchen • Authentic Homemade Excellence
          </div>
          <div className="text-center">
            <Link 
              href="https://www.sarjunsourya.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs tracking-[0.3em] font-bold text-primary hover:opacity-80 transition-opacity uppercase"
            >
              CRAFTED BY MADE BY. SARJUNSOURYA.COM BRAND DESIGN & WEBSITE DEVELOPMENT ✨
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
