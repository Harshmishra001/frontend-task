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
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="relative h-64 w-full bg-gray-50 group-hover:bg-teal-50 transition-colors">
        <div className="absolute top-2 right-2 z-10 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.rating.rate} ★
        </div>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain", padding: "1rem" }}
          priority={false}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          <span className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full uppercase">
            {product.category}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-teal-700 transition-colors">
          {product.title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-teal-700 font-bold">${product.price.toFixed(2)}</p>
          <div className="text-xs text-gray-500">{product.rating.count} reviews</div>
        </div>
      </div>
    </Link>
  );
}
