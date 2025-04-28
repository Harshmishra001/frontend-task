import ErrorDisplay from "@/components/ErrorDisplay";
import FilterBar from "@/components/FilterBar";
import { FilterBarSkeleton, ProductCardSkeleton } from "@/components/LoadingSkeleton";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/api";
import { filterProductsByCategory, filterProductsBySearch, paginateProducts, sortProducts } from "@/lib/utils";
import { Suspense } from "react";
// Define the correct type for searchParams
type SearchParams = { [key: string]: string | string[] | undefined };

// Interface for page component props
interface PageProps {
  params: { [key: string]: string };
  searchParams: SearchParams;
}

// Interface for components that only need searchParams
interface SearchParamsProps {
  searchParams: SearchParams;
}

// Fetch categories for filter bar
async function ProductFilters() {
  const categories = await getCategories();

  // If no categories are returned, show a default filter with just "All"
  if (categories.length === 0) {
    return <FilterBar categories={[]} />;
  }

  return <FilterBar categories={categories} />;
}

// Fetch and render products list
async function ProductList({ searchParams }: SearchParamsProps) {
  const products = await getProducts();

  // If no products are returned, show an error message
  if (products.length === 0) {
    return (
      <ErrorDisplay message="Failed to load products. Please try again later." />
    );
  }

  // Apply filters
  const category = typeof searchParams.category === "string" ? searchParams.category : null;
  const sortBy = typeof searchParams.sort === "string" ? searchParams.sort : "";
  const searchTerm = typeof searchParams.search === "string" ? searchParams.search : "";
  const currentPage = parseInt(typeof searchParams.page === "string" ? searchParams.page : "1", 10);
  const itemsPerPage = 8;

  // Filter and sort products
  let filteredProducts = filterProductsByCategory(products, category);
  filteredProducts = filterProductsBySearch(filteredProducts, searchTerm);
  filteredProducts = sortProducts(filteredProducts, sortBy);

  // Pagination
  const totalItems = filteredProducts.length;
  const paginatedProducts = paginateProducts(filteredProducts, currentPage, itemsPerPage);

  return (
    <>
      <div className="grid">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--gray-700)', marginBottom: '0.5rem' }}>No products found</h3>
            <p style={{ color: 'var(--gray-500)' }}>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {filteredProducts.length > 0 && (
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
}

// Main Home page
export default function Home({ searchParams }: PageProps) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: 'var(--gray-800)',
          marginBottom: '1rem'
        }}>
          All Products
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: 'var(--gray-500)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" style={{ marginRight: '0.25rem' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          Browse our collection of high-quality products
        </div>
      </div>

      <Suspense fallback={<FilterBarSkeleton />}>
        <ProductFilters />
      </Suspense>

      <Suspense fallback={
        <div className="grid">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      }>
        <ProductList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}