import type { Product } from "@/types/product";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwk4IflkH5Q9CKh6s6ZXC0RfFxuxTv9CPxh7mS0Xc7kk1besMD5-wY9OrKgyHOML2nS9g/exec";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductById(id: string) {
  const products = await fetchProducts();
  return products.find((p) => p.id === id);
}
