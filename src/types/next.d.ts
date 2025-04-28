// Type definitions for Next.js pages

// Define the type for search parameters
export type SearchParams = { [key: string]: string | string[] | undefined };


// Define the type for page props
export interface PageProps {
  params: { [key: string]: string };
  searchParams: SearchParams;
}

// Define the type for components that only need search parameters
export interface SearchParamsProps {
  searchParams: SearchParams;
}
