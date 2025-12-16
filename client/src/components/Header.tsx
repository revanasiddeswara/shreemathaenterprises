import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, ChevronDown, Droplets, Sun, Lightbulb, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const services = [
  { name: "Domestic RO Purifiers", href: "/domestic-ro", icon: Droplets },
  { name: "Commercial RO Plants", href: "/commercial-ro", icon: Droplets },
  { name: "High Mast Lights", href: "/high-mast-lights", icon: Lightbulb },
  { name: "Solar Solutions", href: "/solar-solutions", icon: Sun },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => location === href;
  const isServiceActive = services.some(s => location === s.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="nav-logo">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold leading-tight">Shree Matha</p>
              <p className="text-xs text-muted-foreground leading-tight">Enterprises</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={isActive(link.href) ? "bg-accent" : ""}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={isServiceActive ? "bg-accent" : ""}
                  data-testid="nav-services-dropdown"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="flex items-center gap-2 cursor-pointer" data-testid={`dropdown-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <service.icon className="h-4 w-4" />
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={isActive(link.href) ? "bg-accent" : ""}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="tel:+919876543210" className="hidden sm:block">
              <Button variant="outline" size="sm" data-testid="button-header-call">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-green-600 hover:bg-green-700" data-testid="button-header-whatsapp">
                <SiWhatsapp className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </a>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col gap-4 mt-8">
                  <p className="text-lg font-semibold mb-2">Navigation</p>
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive(link.href) ? "bg-accent" : ""}`}
                        data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                  
                  <p className="text-lg font-semibold mt-4 mb-2">Our Services</p>
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive(service.href) ? "bg-accent" : ""}`}
                        data-testid={`mobile-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <service.icon className="mr-2 h-4 w-4" />
                        {service.name}
                      </Button>
                    </Link>
                  ))}

                  <div className="mt-6 flex flex-col gap-2">
                    <a href="tel:+919876543210" className="w-full">
                      <Button variant="outline" className="w-full" data-testid="mobile-button-call">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700" data-testid="mobile-button-whatsapp">
                        <SiWhatsapp className="mr-2 h-4 w-4" />
                        WhatsApp Enquiry
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
