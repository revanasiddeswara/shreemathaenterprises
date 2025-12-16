import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Shield, 
  Wrench, 
  CheckCircle,
  Zap,
  Leaf,
  ThermometerSun
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const products = [
  {
    name: "Compact 5L RO Purifier",
    capacity: "5 Liters",
    price: "Starting from Rs. 8,999",
    features: ["RO + UV purification", "5-stage filtration", "LED indicators", "Compact design"],
    ideal: "Small families, Offices",
    bestseller: false,
  },
  {
    name: "Family 10L RO Purifier",
    capacity: "10 Liters",
    price: "Starting from Rs. 12,999",
    features: ["RO + UV + UF purification", "7-stage filtration", "TDS controller", "Mineral enhancer"],
    ideal: "Medium families",
    bestseller: true,
  },
  {
    name: "Premium 15L RO Purifier",
    capacity: "15 Liters",
    price: "Starting from Rs. 16,999",
    features: ["RO + UV + UF + Alkaline", "8-stage filtration", "Digital display", "Auto-flush system"],
    ideal: "Large families, Guests",
    bestseller: false,
  },
  {
    name: "Max 25L RO Purifier",
    capacity: "25 Liters",
    price: "Starting from Rs. 22,999",
    features: ["Commercial-grade RO", "10-stage filtration", "High flow rate", "Stainless steel tank"],
    ideal: "Joint families, Small offices",
    bestseller: false,
  },
];

const features = [
  {
    icon: Droplets,
    title: "Multi-Stage Purification",
    description: "Advanced RO + UV + UF technology removes 99.9% of contaminants for pure, safe drinking water.",
  },
  {
    icon: Shield,
    title: "TDS Controller",
    description: "Maintains essential minerals while removing harmful dissolved solids for healthy water.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Low power consumption designs that save electricity while delivering pure water.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Minimal water wastage with advanced filtration technology and recyclable filters.",
  },
  {
    icon: ThermometerSun,
    title: "Hot & Cold Options",
    description: "Select models available with instant hot and cold water dispensing feature.",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    description: "Professional installation by trained technicians at no extra cost.",
  },
];

const process = [
  { step: 1, title: "Enquiry", description: "Contact us via call or WhatsApp" },
  { step: 2, title: "Water Testing", description: "Free TDS and quality check" },
  { step: 3, title: "Recommendation", description: "Best purifier for your needs" },
  { step: 4, title: "Installation", description: "Same-day professional setup" },
  { step: 5, title: "Training", description: "Usage and maintenance guide" },
];

export default function DomesticRO() {
  return (
    <div>
      <PageHero
        title="Domestic RO Water Purifiers"
        description="Pure, safe drinking water for your family. Choose from our range of 5L to 25L RO water purifiers with advanced multi-stage purification technology. Free installation and after-sales service included."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="products-title">Our RO Purifier Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect water purifier for your home based on your family size and water quality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className={`relative ${product.bestseller ? "border-primary" : ""}`}>
                {product.bestseller && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary">
                    Bestseller
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-primary">{product.capacity}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center font-semibold text-muted-foreground">{product.price}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground text-center">
                    Ideal for: {product.ideal}
                  </p>
                  <a
                    href={`https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}.%20Please%20share%20more%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700" data-testid={`product-whatsapp-${index}`}>
                      <SiWhatsapp className="mr-2 h-4 w-4" />
                      Order on WhatsApp
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="features-title">Why Choose Our RO Purifiers?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced technology and features that ensure your family gets the purest drinking water.
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="process-title">Our Installation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From enquiry to installation, we ensure a smooth and hassle-free experience.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            {process.map((step, index) => (
              <div key={step.step} className="flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">AMC & Service Plans</h3>
                  <p className="text-muted-foreground mb-6">
                    Keep your RO purifier running at peak performance with our Annual Maintenance Contracts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Quarterly filter replacements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Free service visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Genuine spare parts</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-3xl font-bold text-primary mb-2">Starting Rs. 2,499/year</p>
                  <p className="text-muted-foreground mb-6">Comprehensive AMC for peace of mind</p>
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20an%20AMC%20plan%20for%20my%20RO%20purifier."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" data-testid="amc-enquiry-btn">
                      Enquire About AMC
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection 
        title="Get Your Home RO Purifier Today"
        subtitle="Free water quality testing and same-day installation available in most areas."
        defaultService="domestic-ro"
      />
    </div>
  );
}
