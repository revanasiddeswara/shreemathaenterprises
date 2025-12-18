import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    primary: "+91 89516 82834",
    secondary: "+91 81050 52268",
    action: "tel:+918951682834",
    actionLabel: "Click to call",
  },
  {
    icon: SiWhatsapp,
    title: "WhatsApp",
    primary: "+91 98765 43210",
    secondary: "Chat with us instantly",
    action:
      "https://wa.me/918951682834?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
    actionLabel: "Start chat",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: "Email",
    primary: "shreemathaenterprises07@gmail.com",
    secondary: "shreemathaenterprises07@gmail.com",
    action: "mailto:shreemathaenterprises07@gmail.com",
    actionLabel: "Send email",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon - Sat: 9:00 AM - 7:00 PM",
    secondary: "Sunday: Closed",
    action: null,
    actionLabel: null,
  },
];

export default function Contact() {
  return (
    <div>
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              data-testid="contact-title"
            >
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a question or ready to start your project? Get in touch with
              us through any of the channels below. Our team is ready to assist
              you with all your water purification, lighting, and solar needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                data-testid="contact-form-title"
              >
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div
                        className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${
                          info.isWhatsApp
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <info.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.isWhatsApp ? "_blank" : undefined}
                          rel={
                            info.isWhatsApp ? "noopener noreferrer" : undefined
                          }
                          className={`block mb-1 ${
                            info.isWhatsApp
                              ? "text-green-600 hover:text-green-700"
                              : "text-primary hover:underline"
                          }`}
                          data-testid={`contact-${info.title.toLowerCase()}`}
                        >
                          {info.primary}
                        </a>
                      ) : (
                        <p className="mb-1">{info.primary}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {info.secondary}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Office Address</h3>
                      <p className="text-muted-foreground mb-4">
                        Shree Matha Enterprises
                        <br />
                        Door No 353/B/2 ,<br /> Ward 9 Huguloor Ola Raste,
                        Huvinahadagali,
                        <br /> Hoovina Hadagalli- 583219,
                        <br />
                        Vijayanagara (Dist) Karnataka, India
                      </p>
                      <a
                        href="https://maps.app.goo.gl/i6SceRHJMVZFdvdq7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                        data-testid="get-directions"
                      >
                        Get Directions on Google Maps
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <EnquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1973022.1842354147!2d73.49509305624998!3d15.017168700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9bda5d8c4dc31%3A0x205db0dab343dcd7!2sShree%20Matha%20Enterprises!5e0!3m2!1sen!2sin!4v1765975996717!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Matha Enterprises Location"
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="areas-title"
            >
              Service Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide our services across these key locations in Karnataka
              with dedicated support teams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Ballari",
              "Vijayanagara",
              "Haveri",
              "Ranebennur",
              "Chitradurga",
              "Huvinahadagali",
              "Harapanahalli",
              "Gadag",
              "Mundargi",
              "Hospet",
              "Kampli",
              "Siruguppa",  " All Over Karnataka"
            ].map((area) => (
              <Card key={area} className="text-center">
                <CardContent className="py-6">
                  <MapPin className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="font-semibold">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
