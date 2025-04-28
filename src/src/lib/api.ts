import { Product } from "@/types";

const API_URL = "https://fakestoreapi.com";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  
  return response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  
  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/categories`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  
  return response.json();
}
