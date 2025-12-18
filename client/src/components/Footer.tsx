import { Link } from "wouter";
import { Droplets, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const services = [
  { name: "Domestic RO Purifiers", href: "/domestic-ro" },
  { name: "Commercial RO Plants", href: "/commercial-ro" },
  { name: "High Mast Lights", href: "/high-mast-lights" },
  { name: "Solar Solutions", href: "/solar-solutions" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const serviceAreas = [
  "Ballari",
  "Vijayanagara", 
  "Huvinahadagali",
  "Hospet",
  "Kampli",
  "Siruguppa",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2" data-testid="footer-logo">
               <img
  src="/logo.png"
  alt="Shree Matha Logo"
  className="h-10 w-auto"
  data-testid="nav-logo-img"
/>
              <div>
                <p className="text-lg font-bold leading-tight">Shree Matha</p>
                <p className="text-xs text-muted-foreground leading-tight">Enterprises</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for RO Water Purification, High-Mast Lighting, and Solar Solutions across Karnataka.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/918951682834"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white hover-elevate"
                aria-label="WhatsApp"
                data-testid="footer-whatsapp"
              >
                <SiWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1APADSxa4a/"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white hover-elevate"
                aria-label="Facebook"
                data-testid="footer-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/shree_matha_enterprises?igsh=NTdmaGhvMTdtM3pp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-600 text-white hover-elevate"
                aria-label="Instagram"
                data-testid="footer-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              {/* <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white hover-elevate"
                aria-label="LinkedIn"
                data-testid="footer-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a> */}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-base font-semibold pt-4">Service Areas</h3>
            <p className="text-sm text-muted-foreground">
              {serviceAreas.join(" • ")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <a href="tel:+918951682834" className="text-sm hover:text-primary transition-colors" data-testid="footer-phone">
                    +91 89516 82834
                  </a>
                  <br />
                  <a href="tel:+919876543211" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 89516 82834
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@shreematha.com" className="text-sm hover:text-primary transition-colors" data-testid="footer-email">
                  shreemathaenterprises07@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                   Door No 353/B/2 ,<br /> Ward 9 Huguloor Ola Raste,
                  Huvinahadagali,<br /> Hoovina Hadagalli- 583219,<br /> 
                  Vijayanagara (Dist) 
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Mon - Sat: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Shree Matha Enterprises. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                ISO Certified
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                10+ Years Experience
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                50+ Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
