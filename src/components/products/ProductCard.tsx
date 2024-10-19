import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import VariantSelector from "./VariantSelector";
import { Product } from "@/types/product";

type Props = {
  product: Product;
  imgPriority?: boolean;
};

const ProductCard = ({ product, imgPriority }: Props) => {
  return (
    <a
      href={`/products/${product.urlKey}`}
      className="group block overflow-hidden relative bg-white rounded-sm"
    >
      {product.badge?.text && (
        <span className="absolute right-0 top-0 z-10 rounded-bl-lg bg-rose-600 px-4 py-1 font-medium text-white shadow-md shadow-gray-800">
          {product.badge?.text}
        </span>
      )}
      <div className="h-[350px] w-full relative">
        <Image
          alt={product.imageAlt!}
          src={product.imageSrc!}
          fill
          priority={imgPriority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative border border-1 border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 p-6 pt-3">
        <h3 className="text-base group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider">{product.price}</span>
        </p>
        <div className="mt-2 flex flex-col gap-2.5 min-h-16">
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
          <Button size="sm" variant="primary">
            Add to Cart
          </Button>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
