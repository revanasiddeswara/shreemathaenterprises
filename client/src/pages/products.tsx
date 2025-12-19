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

import { CheckCircle, Droplets, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

/* ---------------- CONFIG ---------------- */
const ITEMS_PER_PAGE = 8; // 2 rows (4x2)

/* ---------------- SKELETON ---------------- */
function ProductSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto h-16 w-16 rounded-full bg-muted mb-4" />
        <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2" />
        <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-40 bg-muted rounded" />
        <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-5/6" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 bg-muted rounded w-full" />
          <div className="h-10 bg-muted rounded w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState("all");
  const [page, setPage] = useState(1);

  /* ---------------- FILTER + SORT ---------------- */
  const filteredProducts = useMemo(() => {
    if (!data) return [];

    return data
      .filter((p: Product) => {
        const text = `${p.name} ${p.brand} ${p.capacity} ${p.price}`.toLowerCase();

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
      })
      .sort((a, b) => a.name.localeCompare(b.name)); // A–Z
  }, [data, search, brand, price]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  if (isError) {
    return <p className="p-8 text-center">Failed to load products</p>;
  }

  return (
    <div>
      {/* HERO */}
      <PageHero
        title="Available Water Purifiers"
        description="Premium water purifiers for home and small commercial use. Trusted brands, expert installation and direct WhatsApp ordering."
      />

      {/* SEARCH & FILTER */}
      <section className="py-12 border-b bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-background rounded-xl p-4 shadow-sm">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by brand, capacity or price"
                className="pl-9 h-11"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>

            <Select value={brand} onValueChange={(v) => { setBrand(v); setPage(1); }}>
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

            <Select value={price} onValueChange={(v) => { setPrice(v); setPage(1); }}>
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

      {/* PRODUCTS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Droplets className="mx-auto h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting filters or contact us for expert guidance.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setBrand("all");
                  setPrice("all");
                  setPage(1);
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => {
                  const image = product.imageBaseUrl?.split("|")[0];

                  return (
                    <Card key={product.id} className="hover:shadow-xl hover:-translate-y-1 transition-all">
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
                            href={`https://wa.me/918951682834?text=${encodeURIComponent(
                              `Hi Shree Matha Enterprises 👋\n\nI’m interested in ${product.brand} ${product.name} (${product.capacity}L).\nPlease share price, installation & warranty details.`
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

              {/* PAGINATION CONTROLS */}
              <div className="flex justify-center items-center gap-2 mt-12">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Prev
                </Button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={page === i + 1 ? "default" : "outline"}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </>
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
