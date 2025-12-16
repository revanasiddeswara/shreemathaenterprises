import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { 
  Droplets, 
  Sun, 
  Lightbulb, 
  Phone,
  ArrowRight,
  FileText
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const services = [
  {
    title: "Domestic RO Purifiers",
    description: "Pure, safe drinking water for your home with our range of 5L to 25L RO water purifiers.",
    icon: Droplets,
    href: "/domestic-ro",
    features: ["5L to 25L capacity", "UV + RO + TDS", "Free installation"],
  },
  {
    title: "Commercial RO Plants",
    description: "Industrial-grade water purification solutions from 25 LPH to 5000 LPH capacity.",
    icon: Droplets,
    href: "/commercial-ro",
    features: ["25 to 5000 LPH", "Custom solutions", "Site assessment"],
  },
  {
    title: "High Mast Lights",
    description: "Professional high mast lighting solutions for streets, stadiums, and industrial areas.",
    icon: Lightbulb,
    href: "/high-mast-lights",
    features: ["All pole heights", "LED fittings", "AMC available"],
  },
  {
    title: "Solar Solutions",
    description: "Complete solar power systems for residential and commercial applications.",
    icon: Sun,
    href: "/solar-solutions",
    features: ["On-grid & off-grid", "Rooftop systems", "Subsidy assistance"],
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Ballari",
    service: "Commercial RO",
    quote: "Excellent service! They installed a 1000 LPH RO plant for our factory. The water quality is exceptional and the team was very professional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Hospet",
    service: "Domestic RO",
    quote: "Very happy with our home RO purifier. The installation was quick and the after-sales service is excellent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mohammad Ali",
    location: "Huvinahadagali",
    service: "Solar Installation",
    quote: "Great solar installation for our home. Our electricity bills have reduced significantly. The team was knowledgeable and helpful.",
    rating: 5,
  },
  {
    name: "Anand Reddy",
    location: "Vijayanagara",
    service: "High Mast Lights",
    quote: "Professional high mast light installation for our industrial complex. The quality of work and materials used is top-notch.",
    rating: 4,
  },
];

const recentProjects = [
  {
    title: "Industrial RO Plant - Steel Factory",
    category: "Commercial RO",
    location: "Ballari Industrial Area",
    specs: "2000 LPH Capacity",
  },
  {
    title: "Solar Rooftop Installation",
    category: "Solar",
    location: "Hospet Residential",
    specs: "10 kW System",
  },
  {
    title: "Stadium High Mast Lighting",
    category: "High Mast",
    location: "Vijayanagara Sports Complex",
    specs: "35m Pole with LED",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/10 rounded-l-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Trusted by 500+ customers across Karnataka
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" data-testid="hero-title">
              Your Trusted Partner for{" "}
              <span className="text-primary">RO Water Purification</span>,{" "}
              <span className="text-primary">High-Mast Lighting</span>, and{" "}
              <span className="text-primary">Solar Solutions</span> in Karnataka
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl" data-testid="hero-description">
              Complete engineering solutions for homes, businesses, and industries. 
              Serving Ballari, Vijayanagara, Huvinahadagali, and surrounding areas with quality products and expert installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-home-call">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700" data-testid="button-home-whatsapp">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  WhatsApp Enquiry
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-home-quote">
                  <FileText className="mr-2 h-5 w-5" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="services-title">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From pure drinking water solutions to sustainable energy systems, we provide complete engineering services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="testimonials-title">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2" data-testid="projects-title">Recent Projects</h2>
              <p className="text-muted-foreground">
                Explore our latest installations and completed projects.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="service-areas-title">Service Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide our services across Karnataka with a focus on the following regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Ballari", "Vijayanagara", "Huvinahadagali", "Hospet", "Kampli", "Siruguppa"].map((area) => (
              <Card key={area} className="text-center" data-testid={`area-card-${area.toLowerCase()}`}>
                <CardContent className="py-4 px-2">
                  <p className="font-medium">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
