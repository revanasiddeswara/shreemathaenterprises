import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";

import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { fetchProducts } from "@/lib/productsApi";
import type { Product } from "@/types/product";

import { CheckCircle, Droplets, Search } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState("all");

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    return data.filter((p: Product) => {
      const text = `${p.name} ${p.brand} ${p.capacity} ${p.price}`
        .toLowerCase();

      const matchesSearch =
        search.trim() === "" || text.includes(search.toLowerCase());

      const matchesBrand =
        brand === "all" || p.brand?.toLowerCase() === brand.toLowerCase();

      const matchesPrice =
        price === "all" ||
        (price === "low" && p.price < 12000) ||
        (price === "mid" && p.price >= 12000 && p.price <= 18000) ||
        (price === "high" && p.price > 18000);

      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [data, search, brand, price]);

  if (isLoading) return <p className="p-8">Loading products…</p>;
  if (isError || !data) return <p className="p-8">Failed to load products</p>;

  return (
    <div>
      {/* HERO */}
      <PageHero
        title="Available Water Purifiers"
        description="Premium water purifiers for home and small commercial use. Trusted brands, expert installation and direct WhatsApp ordering."
      />

      {/* SEARCH + FILTER */}
      <section className="relative py-12 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Find the Right Water Purifier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Search by brand, capacity or price. Filter to match your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
            {/* SEARCH */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by brand, capacity, price (eg: 9L, 12000)"
                className="pl-9 h-11"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* BRAND */}
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="Purosis">Purosis</SelectItem>
                <SelectItem value="Finpure">Finpure</SelectItem>
                <SelectItem value="Aquaguard">Aquaguard</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>

            {/* PRICE */}
            <Select value={price} onValueChange={setPrice}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Below ₹12,000</SelectItem>
                <SelectItem value="mid">₹12,000 – ₹18,000</SelectItem>
                <SelectItem value="high">Above ₹18,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* PRODUCTS / EMPTY STATE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center text-center max-w-xl mx-auto">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Droplets className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                No Matching Products Found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or let our expert recommend the best
                purifier for your water quality.
              </p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearch("");
                    setBrand("all");
                    setPrice("all");
                  }}
                >
                  Reset Filters
                </Button>

                <a
                  href="https://wa.me/918951682834?text=Hello%20Shree%20Matha%20Enterprises%2C%20I%20need%20help%20choosing%20the%20right%20water%20purifier."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700">
                    <SiWhatsapp className="mr-2 h-4 w-4" />
                    Get Expert Help
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const image = product.imageBaseUrl?.split("|")[0];

                return (
                  <Card
                    key={product.id}
                    className="hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Droplets className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        {product.brand} {product.name}
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
                        {product.features.slice(0, 2).map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-2">
                        <Link
                          href={`/product/${encodeURIComponent(
                            product.name.toLowerCase().replace(/\s+/g, "-")
                          )}`}
                          className="w-full"
                        >
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>

                        <a
                          href={`https://wa.me/918951682834?text=${encodeURIComponent(
                            `Hi Shree Matha Enterprises 👋  
I’m interested in the ${product.brand} ${product.name} (${product.capacity}L).

Could you please share:
• Final price
• Installation details
• Warranty & AMC info

Thank you.`
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
          )}
        </div>
      </section>

      <CTASection
        title="Need Help Choosing?"
        subtitle="Free water testing & expert guidance available."
      />
    </div>
  );
}
