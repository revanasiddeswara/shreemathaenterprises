import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnquiryForm } from "./EnquiryForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
}

export function CTASection({ 
  title = "Get a Free Quote", 
  subtitle = "Fill out the form below and our team will get back to you within 24 hours.",
  defaultService = ""
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="cta-section-title">{title}</h2>
            <p className="text-muted-foreground mb-8">{subtitle}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-cta-phone">
                    +91 89516 82834
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400 shrink-0">
                  <SiWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a 
                    href="https://wa.me/8951682834" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green-600 transition-colors"
                    data-testid="link-cta-whatsapp"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@shreematha.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-cta-email">
                  shreemathaenterprises07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p className="text-muted-foreground">
                  Door No 353/B/2, Ward 9 Huguloor Ola Raste,
                  Huvinahadagali Hoovina Hadagalli                                                                                                  
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Enquiry Form</CardTitle>
            </CardHeader>
            <CardContent>
              <EnquiryForm defaultService={defaultService} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
