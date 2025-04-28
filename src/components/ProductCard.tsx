import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card"
    >
      <div className="product-image">
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          zIndex: 10,
          backgroundColor: 'var(--primary)',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          padding: '2px 8px',
          borderRadius: '9999px'
        }}>
          {product.rating.rate} ★
        </div>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain", padding: "1rem" }}
          priority={false}
        />
      </div>
      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>
        <h2 className="product-title">
          {product.title}
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">{product.rating.count} reviews</div>
        </div>
      </div>
    </Link>
  );
}
