import Link from "next/link";
import { Logo } from "../logo";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Authentic homemade meals, crafted fresh with love from the heart of Delft.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-semibold">Sitemap</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
             <h3 className="font-headline text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
                <li>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">Terms of Service</Link>
                </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <a href="mailto:info@the-divine-kitchen.com" className="text-muted-foreground transition-colors hover:text-foreground">
                  info@the-divine-kitchen.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Delft, Netherlands</span>
              </li>
               <li className="flex items-center gap-3">
                <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  Instagram
                </a>
              </li>
               <li className="flex items-center gap-3">
                <a href="https://wa.me/31000000000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Divine Kitchen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
