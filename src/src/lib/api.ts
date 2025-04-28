import { Product } from "@/types";

const API_URL = "https://fakestoreapi.com";

// Common fetch options with caching
const fetchOptions = {
  next: { revalidate: 3600 }, // Cache for 1 hour
};

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`, fetchOptions);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array instead of throwing
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, fetchOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_URL}/products/categories`, fetchOptions);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // Return empty array instead of throwing
  }
}
