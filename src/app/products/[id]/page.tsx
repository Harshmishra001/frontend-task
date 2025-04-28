import ErrorDisplay from "@/components/ErrorDisplay";
import { ProductDetailSkeleton } from "@/components/LoadingSkeleton";
import { getProduct } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// Define the correct type for page props
interface ProductDetailPageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

async function ProductDetail({ id }: { id: string }) {
  const product = await getProduct(id);

  if (!product) {
    return <ErrorDisplay message={`Failed to load product details. The product may not exist.`} />;
  }

  return (
    <div className="container">
      <div className="product-detail">
        <div className="product-detail-image">
          <div style={{ position: 'relative', height: '384px', width: '100%', backgroundColor: 'var(--gray-50)', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px'
            }}>
              {product.rating.rate} ★
            </div>
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain", padding: "2rem" }}
              priority
            />
          </div>
        </div>
        <div className="product-detail-info">
          <span className="product-detail-category">
            {product.category}
          </span>
          <h1 className="product-detail-title">{product.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  fill={i < Math.round(product.rating.rate) ? "#FBBF24" : "#D1D5DB"}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <div style={{ backgroundColor: 'var(--gray-50)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Description</h2>
            <p className="product-detail-description">{product.description}</p>
          </div>
          <div className="product-detail-actions">
            <button className="btn btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '0.5rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
            <button className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <Link
          href="/"
          style={{
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '0.5rem' }}
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
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetail id={params.id} />
    </Suspense>
  );
}
