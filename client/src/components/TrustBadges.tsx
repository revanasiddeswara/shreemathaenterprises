import { Shield, Award, Clock, Users, Wrench, CheckCircle } from "lucide-react";

interface TrustBadge {
  icon: React.ElementType;
  title: string;
  description: string;
}

const badges: TrustBadge[] = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Trusted expertise in water & solar solutions",
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    description: "Comprehensive warranty on all products",
  },
  {
    icon: CheckCircle,
    title: "Quality Certified",
    description: "ISO certified processes & products",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Annual maintenance contracts available",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Serving homes, businesses & industries",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service in major areas",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="trust-section-title">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We bring years of expertise, quality products, and dedicated service to every project across Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-background border"
              data-testid={`trust-badge-${index}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                <badge.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
