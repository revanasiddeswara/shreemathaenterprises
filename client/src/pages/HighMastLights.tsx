import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Lightbulb, 
  Wrench, 
  Shield,
  CheckCircle,
  Ruler,
  Zap,
  Sun,
  Phone,
  Building,
  Factory,
  MapPin
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const poleHeights = [
  { height: "12m", wattage: "120W - 200W", coverage: "800 sq.m", application: "Residential streets, Parking lots" },
  { height: "15m", wattage: "200W - 300W", coverage: "1200 sq.m", application: "Main roads, Junctions" },
  { height: "20m", wattage: "300W - 500W", coverage: "2000 sq.m", application: "Highways, Industrial areas" },
  { height: "25m", wattage: "500W - 800W", coverage: "3000 sq.m", application: "Stadiums, Large complexes" },
  { height: "30m", wattage: "800W - 1200W", coverage: "4500 sq.m", application: "Airports, Ports, Mining" },
  { height: "35m+", wattage: "1200W+", coverage: "6000+ sq.m", application: "Special applications" },
];

const features = [
  {
    icon: Lightbulb,
    title: "High-Efficiency LED",
    description: "Energy-efficient LED fittings with 50,000+ hours lifespan and superior lumen output.",
  },
  {
    icon: Zap,
    title: "Auto Raise/Lower",
    description: "Motorized lowering mechanism for easy maintenance without aerial equipment.",
  },
  {
    icon: Shield,
    title: "Weather Resistant",
    description: "Hot-dip galvanized poles and IP66 rated fixtures for all weather conditions.",
  },
  {
    icon: Sun,
    title: "Smart Controls",
    description: "Optional timer, photocell, and smart control systems for automated operation.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description: "Robust construction with minimal maintenance requirements over extended periods.",
  },
  {
    icon: Ruler,
    title: "Custom Design",
    description: "Poles designed as per site requirements with proper wind load calculations.",
  },
];

const applications = [
  { icon: MapPin, name: "Streets & Highways", description: "Urban and rural road lighting" },
  { icon: Building, name: "Sports Complexes", description: "Stadiums, grounds, and courts" },
  { icon: Factory, name: "Industrial Areas", description: "Factories, ports, and warehouses" },
  { icon: MapPin, name: "Public Spaces", description: "Parks, plazas, and squares" },
];

const amcServices = [
  "Regular inspection of pole structure",
  "Cleaning and maintenance of LED fittings",
  "Electrical system health check",
  "Motor and winch mechanism servicing",
  "Emergency repair services",
  "Replacement of faulty components",
];

export default function HighMastLights() {
  return (
    <div>
      <PageHero
        title="High Mast Light Solutions"
        description="Professional high mast lighting systems for streets, highways, stadiums, industrial complexes, and public spaces. Complete supply, installation, and maintenance services with LED fittings from 12m to 35m+ pole heights."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="specs-title">Pole Heights & Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We supply and install high mast poles across all standard heights with customization options available.
            </p>
          </div>

          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pole Height</TableHead>
                  <TableHead>LED Wattage</TableHead>
                  <TableHead>Area Coverage</TableHead>
                  <TableHead className="hidden md:table-cell">Typical Application</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {poleHeights.map((pole, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold">{pole.height}</TableCell>
                    <TableCell>{pole.wattage}</TableCell>
                    <TableCell>{pole.coverage}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{pole.application}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="features-title">Features & Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our high mast lighting systems are designed for maximum efficiency, durability, and ease of maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="applications-title">Applications</h2>
              <p className="text-muted-foreground mb-8">
                Our high mast lighting solutions cater to various outdoor lighting requirements across different sectors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <app.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{app.name}</h3>
                        <p className="text-xs text-muted-foreground">{app.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="services-title">Our Services</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Supply & Installation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Complete turnkey solutions
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Foundation work and pole erection
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Electrical wiring and commissioning
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Testing and handover
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">AMC & Maintenance</h3>
                    <ul className="space-y-2">
                      {amcServices.slice(0, 4).map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Government & Municipal Projects</h3>
                  <p className="opacity-90 mb-6">
                    We are registered vendors for government projects and have successfully completed numerous installations for municipal corporations, public works departments, and other government agencies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      Registered government vendor
                    </li>
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      GeM registered
                    </li>
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      Competitive tender pricing
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20high%20mast%20lighting%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="secondary" className="w-full" data-testid="govt-whatsapp">
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      Discuss Your Project
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button size="lg" variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" data-testid="govt-call">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Enquiry
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection 
        title="Get a High Mast Lighting Quote"
        subtitle="Share your project requirements and our team will provide a detailed proposal with specifications."
        defaultService="high-mast-lights"
      />
    </div>
  );
}
