import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, location, service, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={`testimonial-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
            />
          ))}
        </div>
        <div className="relative mb-4">
          <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary/10" />
          <p className="text-muted-foreground leading-relaxed pl-4">
            {quote}
          </p>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{location} • {service}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
