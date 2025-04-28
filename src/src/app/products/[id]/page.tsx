import ErrorDisplay from "@/components/ErrorDisplay";
import { ProductDetailSkeleton } from "@/components/LoadingSkeleton";
import { getProduct } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

async function ProductDetail({ id }: { id: string }) {
  try {
    // Fetch the product data
    const productData = await getProduct(id);

    // Handle null product case
    if (!productData) {
      return <ErrorDisplay message="Failed to load product details. The product may not exist." />;
    }

    // Destructure product data for easier access
    const { title, price, description, category, image, rating } = productData;

    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-lg p-6 shadow-md">
            <div className="relative h-96 w-full bg-gray-50 rounded-md overflow-hidden">
              <div className="absolute top-4 right-4 z-10 bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {rating.rate} ★
              </div>
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", padding: "2rem" }}
                priority
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium uppercase mb-3">
              {category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(rating.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {rating.rate} ({rating.count} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-teal-700 mb-6">${price.toFixed(2)}</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white py-3 px-8 rounded-md hover:bg-teal-700 transition-colors flex-1 flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button className="border border-teal-600 text-teal-600 py-3 px-6 rounded-md hover:bg-teal-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link
            href="/"
            className="text-teal-600 hover:text-teal-800 flex items-center font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProductDetail:", error);
    return <ErrorDisplay message="Failed to load product details. Please try again later." />;
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetail id={params.id} />
    </Suspense>
  );
}
