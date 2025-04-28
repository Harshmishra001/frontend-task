import { Product } from "@/types";

export function filterProductsByCategory(products: Product[], category: string | null): Product[] {
  if (!category || category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
}

export function filterProductsBySearch(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm) {
    return products;
  }
  const term = searchTerm.toLowerCase();
  return products.filter((product) => 
    product.title.toLowerCase().includes(term) || 
    product.description.toLowerCase().includes(term)
  );
}

export function sortProducts(products: Product[], sortBy: string): Product[] {
  const productsCopy = [...products];
  
  switch (sortBy) {
    case "price-asc":
      return productsCopy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return productsCopy.sort((a, b) => b.price - a.price);
    case "title-asc":
      return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return productsCopy.sort((a, b) => b.title.localeCompare(a.title));
    case "rating-desc":
      return productsCopy.sort((a, b) => b.rating.rate - a.rating.rate);
    default:
      return productsCopy;
  }
}

export function paginateProducts(products: Product[], page: number, itemsPerPage: number): Product[] {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return products.slice(startIndex, endIndex);
}
