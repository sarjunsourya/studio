import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'map');

  return (
    <div className="min-h-screen bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to place an order? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8 md:p-10">
            <h2 className="font-headline text-2xl font-semibold mb-6 text-foreground">
              Send us a Message
            </h2>
            <ContactForm />
            <div className="mt-8 pt-6 border-t">
                 <h3 className="text-lg font-semibold text-foreground mb-4">Or reach us directly:</h3>
                 <div className="space-y-4">
                    <a href="mailto:info@the-divine-kitchen.com" className="flex items-center gap-3 group">
                        <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">info@the-divine-kitchen.com</span>
                    </a>
                    <div className="flex space-x-4 pt-2">
                        <Button asChild variant="outline" size="icon">
                            <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="h-5 w-5 text-primary" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="icon">
                            <a href="https://wa.me/31621308998" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <MessageCircle className="h-5 w-5 text-accent" />
                            </a>
                        </Button>
                    </div>
                 </div>
            </div>
          </div>

          <div className="space-y-6 md:mt-4">
            {mapImage && (
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={mapImage.imageUrl}
                  alt="Map of Delft"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
            <div className="text-center md:text-left bg-card p-6 rounded-2xl shadow-md">
                <h3 className="font-headline text-xl font-semibold flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="h-5 w-5 text-primary"/>
                    Our Location
                </h3>
                <address className="mt-2 text-muted-foreground not-italic">
                    Raad van Europalaan 62,<br />
                    2625PC Delft, Netherlands
                </address>
                <p className="text-sm text-muted-foreground/80 mt-2">
                    (Pick-up only location)
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
