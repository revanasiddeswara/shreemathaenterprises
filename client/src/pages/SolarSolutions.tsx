import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sun, 
  Zap, 
  Battery,
  Home,
  Factory,
  Building2,
  TrendingUp,
  Leaf,
  Shield,
  CheckCircle,
  Phone,
  Calculator
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const solarTypes = [
  {
    id: "on-grid",
    name: "On-Grid Solar",
    description: "Connected to the electricity grid. Excess power is exported and you get credits on your bill.",
    benefits: [
      "Lowest upfront cost",
      "Net metering benefits",
      "No battery required",
      "Government subsidies available",
      "Zero electricity bills possible",
    ],
    ideal: "Urban homes and businesses with reliable grid power",
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar",
    description: "Independent system with battery backup. Perfect for areas with no grid connectivity.",
    benefits: [
      "Complete energy independence",
      "No electricity bills",
      "Reliable power in remote areas",
      "Battery backup storage",
      "Uninterrupted power supply",
    ],
    ideal: "Remote locations, farms, and areas with unreliable power",
  },
  {
    id: "hybrid",
    name: "Hybrid Solar",
    description: "Best of both worlds - grid connected with battery backup for power cuts.",
    benefits: [
      "Grid connected with backup",
      "Power during outages",
      "Net metering eligible",
      "Flexible energy usage",
      "Maximum energy security",
    ],
    ideal: "Areas with frequent power cuts wanting grid benefits",
  },
];

const systemSizes = [
  { size: "1-3 kW", monthly: "90-270 units", savings: "Rs. 600-1,800", suitable: "Small homes, shops" },
  { size: "3-5 kW", monthly: "270-450 units", savings: "Rs. 1,800-3,000", suitable: "Medium homes, offices" },
  { size: "5-10 kW", monthly: "450-900 units", savings: "Rs. 3,000-6,000", suitable: "Large homes, clinics" },
  { size: "10-25 kW", monthly: "900-2250 units", savings: "Rs. 6,000-15,000", suitable: "Commercial, schools" },
  { size: "25-100 kW", monthly: "2250-9000 units", savings: "Rs. 15,000-60,000", suitable: "Industries, factories" },
];

const roiData = [
  { year: "Year 1", investment: "100%", savings: "15-20%", status: "Investment" },
  { year: "Year 3-4", investment: "Breakeven", savings: "45-60%", status: "Payback" },
  { year: "Year 5+", investment: "Profit", savings: "75-90%", status: "Returns" },
  { year: "25 Years", investment: "3-4x ROI", savings: "100%", status: "Free Power" },
];

const features = [
  {
    icon: Sun,
    title: "Premium Solar Panels",
    description: "Tier-1 monocrystalline panels with 25-year performance warranty.",
  },
  {
    icon: Zap,
    title: "Advanced Inverters",
    description: "High-efficiency string or micro-inverters with monitoring.",
  },
  {
    icon: Battery,
    title: "Quality Batteries",
    description: "Lithium-ion or tubular batteries for hybrid/off-grid systems.",
  },
  {
    icon: Shield,
    title: "Comprehensive Warranty",
    description: "5-year complete system warranty with 25-year panel performance.",
  },
  {
    icon: TrendingUp,
    title: "Subsidy Assistance",
    description: "Help with government subsidy applications and documentation.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce carbon footprint and contribute to clean energy.",
  },
];

export default function SolarSolutions() {
  return (
    <div>
      <PageHero
        title="Solar Power Solutions"
        description="Complete solar energy systems for homes, businesses, and industries. On-grid, off-grid, and hybrid solutions with government subsidy assistance. Reduce your electricity bills by up to 90% with clean, renewable energy."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="solar-types-title">Choose Your Solar System</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer three types of solar solutions to match your requirements and location.
            </p>
          </div>

          <Tabs defaultValue="on-grid" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="on-grid" data-testid="tab-on-grid">On-Grid</TabsTrigger>
              <TabsTrigger value="off-grid" data-testid="tab-off-grid">Off-Grid</TabsTrigger>
              <TabsTrigger value="hybrid" data-testid="tab-hybrid">Hybrid</TabsTrigger>
            </TabsList>
            {solarTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                            <Sun className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold">{type.name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">{type.description}</p>
                        <p className="text-sm font-medium mb-2">Ideal for:</p>
                        <p className="text-sm text-muted-foreground mb-6">{type.ideal}</p>
                        <a
                          href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20a%20solar%20installation.%20Please%20share%20more%20details."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-green-600 hover:bg-green-700" data-testid={`solar-${type.id}-enquiry`}>
                            <SiWhatsapp className="mr-2 h-4 w-4" />
                            Get Free Quote
                          </Button>
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold mb-4">Key Benefits:</p>
                        <ul className="space-y-3">
                          {type.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="savings-title">System Sizes & Savings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand how much you can save based on your electricity consumption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {systemSizes.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 mx-auto rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.size}</h3>
                  <p className="text-sm text-muted-foreground mb-1">Monthly Generation</p>
                  <p className="font-semibold mb-2">{item.monthly}</p>
                  <p className="text-sm text-muted-foreground mb-1">Monthly Savings</p>
                  <p className="font-semibold text-green-600">{item.savings}</p>
                  <p className="text-xs text-muted-foreground mt-3">{item.suitable}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="roi-title">Return on Investment</h2>
              <p className="text-muted-foreground mb-8">
                Solar is a smart long-term investment. Here's what you can expect over the lifetime of your system.
              </p>
              <div className="space-y-4">
                {roiData.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Calculator className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{item.year}</p>
                          <p className="text-sm text-muted-foreground">{item.investment}</p>
                        </div>
                      </div>
                      <Badge variant={item.status === "Profit" || item.status === "Free Power" ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="benefits-title">Why Choose Our Solar Solutions?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-white/20 text-white mb-4">Government Subsidy</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Save Up to 40% with Subsidies</h3>
                  <p className="opacity-90 mb-6">
                    The central and state governments offer attractive subsidies for residential solar installations. We help you with the complete documentation and application process.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      Up to Rs. 78,000 subsidy for 3kW systems
                    </li>
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      Additional state subsidies available
                    </li>
                    <li className="flex items-center gap-2 opacity-90">
                      <CheckCircle className="h-5 w-5" />
                      Complete documentation support
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20solar%20installation%20with%20government%20subsidy.%20Please%20guide%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="secondary" className="w-full" data-testid="subsidy-whatsapp">
                      <SiWhatsapp className="mr-2 h-5 w-5" />
                      Check Subsidy Eligibility
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" data-testid="subsidy-call">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Details
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection 
        title="Go Solar Today"
        subtitle="Get a free site assessment and customized solar proposal for your home or business."
        defaultService="solar-solutions"
      />
    </div>
  );
}
