import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Droplets } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/productsApi";
import { Link } from "wouter";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="p-8">Loading products…</p>;
  if (isError || !data) return <p className="p-8">Failed to load products</p>;

  return (
    <div>
      <PageHero
        title="Available Water Purifiers"
        description="Water purifiers for home and small commercial use. Purosis, Finpure and more — order directly on WhatsApp."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((product: Product) => {
              const image = product.imageBaseUrl
                ?.split("|")[0];

              return (
                <Card key={product.id} className="relative">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Droplets className="h-8 w-8 text-primary" />
                    </div>

                    <CardTitle className="text-lg">
                      {product.name}
                    </CardTitle>

                    <p className="text-2xl font-bold text-primary">
                      {product.capacity} L
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <img
                      src={image}
                      alt={product.name}
                      className="h-40 w-full object-contain rounded"
                    />

                    <p className="text-center font-semibold text-muted-foreground">
                     ₹ {Number(product.price).toLocaleString("en-IN")}
                    </p>

                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-2">
                      <Link href={`/product/${product.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>

                      <a
                        href={`https://wa.me/918951682834?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                          product.name
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <SiWhatsapp className="mr-2 h-4 w-4" />
                          Order
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing?"
        subtitle="Free water testing & expert guidance available."
      />
    </div>
  );
}
