import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/productsApi";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Droplets } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState, useMemo } from "react";
import type { Product } from "@/types/product";

/* ---------------------------------- */
/* SMALL UI COMPONENTS */
/* ---------------------------------- */

function LoadingState() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
        <Droplets className="h-8 w-8 text-primary" />
      </div>
      <p className="text-muted-foreground text-sm">
        Loading product details…
      </p>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
        <Droplets className="h-8 w-8 text-destructive" />
      </div>
      <h2 className="text-xl font-semibold">{message}</h2>
      <p className="text-sm text-muted-foreground">
        Please refresh or contact us on WhatsApp.
      </p>
    </div>
  );
}

/* ---------------------------------- */
/* MAIN COMPONENT */
/* ---------------------------------- */

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  /* ✅ ALL HOOKS MUST BE HERE — BEFORE RETURNS */

  const product: Product | undefined = useMemo(() => {
    if (!Array.isArray(data)) return undefined;
    return data.find((p) => String(p.id) === id);
  }, [data, id]);

  const images = useMemo(
    () => product?.imageBaseUrl?.split("|") ?? [],
    [product]
  );

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  /* Set first image safely */
  if (activeImage === null && images.length > 0) {
    setActiveImage(images[0]);
  }

  /* ---------------------------------- */
  /* SAFE RETURNS (NO HOOKS BELOW THIS) */
  /* ---------------------------------- */

  if (isLoading) return <LoadingState />;

  if (isError || !data)
    return <ErrorState message="Failed to load product" />;

  if (!product)
    return <ErrorState message="Product not found" />;

  /* ---------------------------------- */
  /* RENDER */
  /* ---------------------------------- */

  return (
    <div>
      <PageHero
        title={product.name}
        description={`${product.brand} • ${product.capacity}L • Home & Small Commercial`}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGE + COLORS */}
          <Card>
            <CardContent className="p-6">
              <img
                src={activeImage ?? ""}
                alt={product.name}
                className="w-full h-80 object-contain mb-6"
              />

              <div className="flex flex-wrap gap-2 justify-center">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`h-12 w-12 rounded-full border-2 ${
                      activeImage === img
                        ? "border-primary"
                        : "border-muted"
                    }`}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* DETAILS */}
          <div className="space-y-6">
            <Badge variant="outline">{product.brand}</Badge>

            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="text-2xl font-bold text-primary">
              ₹ {Number(product.price).toLocaleString("en-IN")}
            </p>

            {/* FEATURES */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Key Features</h3>

                {(showAllFeatures
                  ? product.features
                  : product.features.slice(0, 3)
                ).map((f, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {f}
                  </div>
                ))}

                {product.features.length > 3 && (
                  <Button
                    variant="ghost"
                    className="px-0 text-primary underline"
                    onClick={() => setShowAllFeatures((v) => !v)}
                  >
                    {showAllFeatures ? "View Less" : "View More"}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* BENEFITS */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Health Benefits</h3>

                {(showAllBenefits
                  ? product.alkalineBenefits
                  : product.alkalineBenefits.slice(0, 3)
                ).map((b, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {b}
                  </div>
                ))}

                {product.alkalineBenefits.length > 3 && (
                  <Button
                    variant="ghost"
                    className="px-0 text-primary underline"
                    onClick={() => setShowAllBenefits((v) => !v)}
                  >
                    {showAllBenefits ? "View Less" : "View More"}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/918951682834?text=${encodeURIComponent(
                `Hello Shree Matha Enterprises 👋

I’m interested in the ${product.brand} ${product.name} (${product.capacity}L).

🔗 Product link:
${window.location.href}

Please share:
• Best price
• Installation timeline
• Warranty & AMC details`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Enquire on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
