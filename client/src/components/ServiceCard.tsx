import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features?: string[];
}

export function ServiceCard({ title, description, icon: Icon, href, features }: ServiceCardProps) {
  return (
    <Card className="group h-full hover-elevate overflow-visible" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Link href={href}>
          <Button variant="ghost" className="w-full justify-between group-hover:bg-accent" data-testid={`button-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
