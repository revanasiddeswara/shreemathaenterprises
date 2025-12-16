import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="h-16 w-16 text-destructive mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4" data-testid="not-found-title">404</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Page Not Found
            </p>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/">
              <Button size="lg" data-testid="button-go-home">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
