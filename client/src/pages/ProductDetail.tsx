import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/productsApi";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import type { Product } from "@/types/product";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="p-8">⏳ Loading product...</p>;
  if (error || !Array.isArray(data)) return <p className="p-8">❌ Failed to load product</p>;

  const product = data.find((p: Product) => String(p.id) === id);

  if (!product) return <p className="p-8">❌ Product not found</p>;

  const images = product.imageBaseUrl.split("|");
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      {/* HERO */}
      <PageHero
        title={product.name}
        description={`${product.brand} • ${product.capacity}L • Home & Small Commercial Use`}
      />

      {/* PRODUCT MAIN */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IMAGE + COLORS */}
          <div>
            <Card>
              <CardContent className="p-6">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-80 object-contain mb-6"
                />

                {/* COLOR SELECTOR */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`h-12 w-12 rounded-full border-2 ${
                        activeImage === img ? "border-primary" : "border-muted"
                      }`}
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      title={product.colors[index] || "Color"}
                    />
                  ))}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-3">
                  Available Colors: {product.colors.join(", ")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* DETAILS */}
          <div className="space-y-6">
            <Badge variant="outline">{product.brand}</Badge>

            <h1 className="text-3xl font-bold">{product.name}</h1>

            <p className="text-center font-semibold text-muted-foreground">
                     ₹ {Number(product.price).toLocaleString("en-IN")}
                    </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Capacity:</strong> {product.capacity} Ltr</p>
              <p><strong>Purification:</strong> {product.purificationCapacity}</p>
              <p><strong>Net Weight:</strong> {product.weight}</p>
              <p><strong>Gross Weight:</strong> {product.grossWeight}</p>
            </div>

            {/* FEATURES */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">Key Features</h3>
                {product.features.map((f, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* ALKALINE BENEFITS */}
            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">More Benefits</h3>
                {product.alkalineBenefits.map((b, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WHATSAPP CTA */}
            <a
              href={`https://wa.me/918951682834?text=${encodeURIComponent(
                `Hello, I am interested in ${product.brand} ${product.name} (${product.capacity}L). Please share full details and installation process.`
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

      {/* TRUST / SERVICE */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-bold text-lg">✔ Free Installation</p>
            <p className="text-sm text-muted-foreground">By trained technicians</p>
          </div>
          <div>
            <p className="font-bold text-lg">✔ Water Testing</p>
            <p className="text-sm text-muted-foreground">Before recommendation</p>
          </div>
          <div>
            <p className="font-bold text-lg">✔ After Sales Support</p>
            <p className="text-sm text-muted-foreground">AMC & service available</p>
          </div>
        </div>
      </section>
    </div>
  );
}
