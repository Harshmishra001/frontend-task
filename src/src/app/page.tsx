import ErrorDisplay from "@/components/ErrorDisplay";
import FilterBar from "@/components/FilterBar";
import { FilterBarSkeleton, ProductCardSkeleton } from "@/components/LoadingSkeleton";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/api";
import { filterProductsByCategory, filterProductsBySearch, paginateProducts, sortProducts } from "@/lib/utils";
import { Suspense } from "react";

interface ProductListProps {
  searchParams: {
    category?: string;
    sort?: string;
    search?: string;
    page?: string;
  };
}

async function ProductFilters() {
  try {
    const categories = await getCategories();
    return <FilterBar categories={categories} />;
  } catch (error) {
    return null;
  }
}

async function ProductList({ searchParams }: ProductListProps) {
  try {
    const products = await getProducts();

    // Apply filters
    const category = searchParams.category || null;
    const sortBy = searchParams.sort || "";
    const searchTerm = searchParams.search || "";
    const currentPage = parseInt(searchParams.page || "1", 10);
    const itemsPerPage = 8;

    // Filter and sort products
    let filteredProducts = filterProductsByCategory(products, category);
    filteredProducts = filterProductsBySearch(filteredProducts, searchTerm);
    filteredProducts = sortProducts(filteredProducts, sortBy);

    // Get total count for pagination
    const totalItems = filteredProducts.length;

    // Paginate products
    const paginatedProducts = paginateProducts(filteredProducts, currentPage, itemsPerPage);

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
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
  } catch (error) {
    return <ErrorDisplay message="Failed to load products. Please try again later." />;
  }
}

export default function Home({ searchParams }: ProductListProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Products</h1>
        <div className="flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          Browse our collection of high-quality products
        </div>
      </div>

      <Suspense fallback={<FilterBarSkeleton />}>
        <ProductFilters />
      </Suspense>

      <Suspense fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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