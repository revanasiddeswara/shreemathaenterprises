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
  Droplets, 
  Factory, 
  Building2, 
  School,
  Hotel,
  Stethoscope,
  Warehouse,
  CheckCircle,
  Download,
  Phone
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const capacityRanges = [
  {
    range: "25-100 LPH",
    suitable: "Small offices, Clinics, Cafes",
    features: ["Compact design", "Wall-mounted option", "Auto-flush"],
    popular: false,
  },
  {
    range: "100-500 LPH",
    suitable: "Schools, Restaurants, Apartments",
    features: ["Stainless steel frame", "Multiple output points", "Pre-filter system"],
    popular: true,
  },
  {
    range: "500-1000 LPH",
    suitable: "Hotels, Hospitals, Industries",
    features: ["Industrial grade", "PLC automation", "Remote monitoring option"],
    popular: false,
  },
  {
    range: "1000-5000 LPH",
    suitable: "Large factories, Townships",
    features: ["Custom engineering", "Full automation", "Centralized control"],
    popular: false,
  },
];

const specifications = [
  { parameter: "Input TDS", value: "Up to 2000 ppm" },
  { parameter: "Output TDS", value: "Below 50 ppm" },
  { parameter: "Recovery Rate", value: "50-75%" },
  { parameter: "Membrane Type", value: "Industrial Grade RO" },
  { parameter: "Power Supply", value: "220V / 440V (customizable)" },
  { parameter: "Warranty", value: "1 Year (extendable)" },
];

const industries = [
  { icon: Factory, name: "Manufacturing", description: "Steel, cement, and chemical industries" },
  { icon: Hotel, name: "Hospitality", description: "Hotels, resorts, and restaurants" },
  { icon: Stethoscope, name: "Healthcare", description: "Hospitals, clinics, and laboratories" },
  { icon: School, name: "Education", description: "Schools, colleges, and universities" },
  { icon: Building2, name: "Commercial", description: "Offices, malls, and apartments" },
  { icon: Warehouse, name: "Food & Beverage", description: "Food processing and packaging" },
];

const process = [
  { step: 1, title: "Site Survey", description: "Our engineers visit your location for assessment" },
  { step: 2, title: "Water Analysis", description: "Comprehensive testing of source water quality" },
  { step: 3, title: "Custom Design", description: "System designed to match your specific needs" },
  { step: 4, title: "Proposal", description: "Detailed quotation with specifications" },
  { step: 5, title: "Installation", description: "Professional installation by expert team" },
  { step: 6, title: "Training & Support", description: "Operator training and ongoing maintenance" },
];

export default function CommercialRO() {
  return (
    <div>
      <PageHero
        title="Commercial RO Plants"
        description="Industrial-grade water purification solutions from 25 LPH to 5000 LPH. Custom-engineered RO plants for factories, hospitals, hotels, schools, and commercial establishments. Complete turnkey solutions with installation and AMC."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="capacity-title">Capacity Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer commercial RO plants across a wide capacity range to suit businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capacityRanges.map((item, index) => (
              <Card key={index} className={`relative ${item.popular ? "border-primary" : ""}`}>
                {item.popular && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{item.range}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Suitable for: {item.suitable}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+919876543210">
                    <Button variant="outline" className="w-full" data-testid={`capacity-enquiry-${index}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="specs-title">Technical Specifications</h2>
              <p className="text-muted-foreground mb-8">
                Our commercial RO plants are built with industrial-grade components and advanced technology for reliable, long-term operation.
              </p>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parameter</TableHead>
                      <TableHead>Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{spec.parameter}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="industries-title">Industries We Serve</h2>
              <p className="text-muted-foreground mb-8">
                Our commercial RO solutions cater to diverse industries with customized configurations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <industry.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{industry.name}</h3>
                        <p className="text-xs text-muted-foreground">{industry.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="process-title">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to ongoing support, we ensure a seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Request a Site Visit</h3>
                  <p className="text-muted-foreground mb-6">
                    Our technical team will visit your location, assess your water needs, and provide a customized solution with detailed specifications and pricing.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Free site assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Water quality testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom system design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Detailed quotation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20request%20a%20site%20visit%20for%20a%20commercial%20RO%20plant."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700" data-testid="site-visit-whatsapp">
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      Request Site Visit on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button size="lg" variant="outline" className="w-full" data-testid="site-visit-call">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Site Visit
                    </Button>
                  </a>
                  <Button size="lg" variant="secondary" className="w-full" data-testid="download-brochure">
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure (PDF)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection 
        title="Get a Custom Commercial RO Solution"
        subtitle="Our engineers will design a system tailored to your specific requirements and water quality."
        defaultService="commercial-ro"
      />
    </div>
  );
}
