
import Link from "next/link";
import { Suspense } from "react";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

function ContactFormLoading() {
  return <div>Loading form...</div>;
}

export default function ContactPage() {
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
            <Suspense fallback={<ContactFormLoading />}>
              <ContactForm />
            </Suspense>
            <div className="mt-8 pt-6 border-t">
                 <h3 className="text-lg font-semibold text-foreground mb-4">Or reach us directly:</h3>
                 <div className="space-y-4">
                    <a href="mailto:info@the-divine-kitchen.com" className="flex items-center gap-3 group">
                        <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"/>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">info@the-divine-kitchen.com</span>
                    </a>
                    <p className="text-sm text-muted-foreground">
                      You can also place an order directly via Instagram DM.
                    </p>
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
            <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.934051011983!2d4.35082167722978!3d51.99615707192778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5f36e4f3a9d%3A0x8f2b7b2b0e9b3b0!2sRaad%20van%20Europalaan%2062%2C%202625%20PC%20Delft%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1727453381183!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Divine Kitchen Location"
                ></iframe>
            </div>
            <div className="text-center md:text-left bg-card p-6 rounded-2xl shadow-md">
                <h3 className="font-headline text-xl font-semibold flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="h-5 w-5 text-primary"/>
                    Our Location
                </h3>
                <address className="mt-2 text-muted-foreground not-italic">
                    Raad van Europalaan 62,<br />
                    2625 PC Delft, Netherlands
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
