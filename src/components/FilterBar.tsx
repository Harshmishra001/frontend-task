"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FilterBarProps {
  categories: string[];
}

export default function FilterBar({ categories }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Debounce search term to avoid too many URL updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (category && category !== "all") {
      params.set("category", category);
    }

    if (sortBy) {
      params.set("sort", sortBy);
    }

    if (debouncedSearchTerm) {
      params.set("search", debouncedSearchTerm);
    }

    const page = searchParams.get("page");
    if (page && page !== "1") {
      params.set("page", page);
    }

    const queryString = params.toString();
    const url = queryString ? `/?${queryString}` : "/";

    router.push(url);
  }, [category, sortBy, debouncedSearchTerm, router, searchParams]);

  return (
    <div className="filter-bar">
      <div className="filter-form">
        <div className="filter-group">
          <label htmlFor="search" className="filter-label">
            Search Products
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by product name..."
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="category" className="filter-label">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-input"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort" className="filter-label">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-input"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="title-asc">Name: A to Z</option>
            <option value="title-desc">Name: Z to A</option>
            <option value="rating-desc">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}
