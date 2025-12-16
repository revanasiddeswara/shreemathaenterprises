import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface PageHeroProps {
  title: string;
  description: string;
  showCTAs?: boolean;
}

export function PageHero({ title, description, showCTAs = true }: PageHeroProps) {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4" data-testid="page-hero-title">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="page-hero-description">
            {description}
          </p>
          {showCTAs && (
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" data-testid="button-hero-call">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700" data-testid="button-hero-whatsapp">
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  WhatsApp Enquiry
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
