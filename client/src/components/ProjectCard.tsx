import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  specs: string;
  imageUrl?: string;
}

export function ProjectCard({ title, category, location, specs, imageUrl }: ProjectCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "commercial ro":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "domestic ro":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200";
      case "solar":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "high mast":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group overflow-hidden hover-elevate" data-testid={`project-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="text-4xl font-bold text-primary/20">{category.charAt(0)}</span>
          </div>
        )}
        <Badge className={`absolute top-3 left-3 ${getCategoryColor(category)}`}>
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-1">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
          <MapPin className="h-3.5 w-3.5" />
          {location}
        </div>
        <p className="text-sm text-muted-foreground">{specs}</p>
      </CardContent>
    </Card>
  );
}
