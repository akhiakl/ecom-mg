import React from "react";
import VariantSelector from "./VariantSelector";
import { Product } from "@/types/product";
import AddToCartButton from "../AddToCartButton";
import Link from "next/link";
import ProductImage from "./ProductImage";

type Props = {
  product: Product;
  productIndex: number;
};

const ProductCard = ({ product, productIndex }: Props) => {
  return (
    <Link
      data-sku={product.sku}
      href={`/products/${product.urlKey}`}
      className="group relative block overflow-hidden rounded-sm bg-white"
    >
      {product.badge?.text && (
        <span className="absolute right-0 top-0 z-10 rounded-bl-lg bg-rose-600 px-4 py-1 font-medium text-white shadow-md shadow-gray-800">
          {product.badge?.text}
        </span>
      )}
      <div className="relative h-[350px] w-full">
        <ProductImage
          alt={product.imageAlt!}
          src={product.imageSrc!}
          productIndex={productIndex}
        />
      </div>

      <div className="border-1 relative border border-gray-100 bg-white p-6 pt-3 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100">
        <h3 className="text-base group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider">{product.price}</span>
        </p>
        <div className="mt-2 flex min-h-16 flex-col gap-2.5">
          {product.options?.map((option) => (
            <VariantSelector
              items={option.values ?? []}
              productId={product.id}
              key={option.id}
              label={option.label}
              id={option.id!}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <AddToCartButton sku={product.sku} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
