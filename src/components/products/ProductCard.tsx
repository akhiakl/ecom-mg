import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import VariantSelector from "./VariantSelector";

type Product = {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  badge?: {
    color?: string;
    text: string;
  };
};

type Props = {
  product: Product;
  imgPriority?: boolean;
};

const ProductCard = ({ product, imgPriority }: Props) => {
  return (
    <a
      href={product.href}
      className="group block overflow-hidden relative bg-gray-100 rounded-sm"
    >
      {product.badge?.text && (
        <span className="absolute right-0 top-0 z-10 rounded-bl-lg bg-rose-600 px-4 py-1 font-medium text-white shadow-md shadow-gray-800">
          {product.badge?.text}
        </span>
      )}
      <div className="h-[350px] w-full relative">
        <Image
          alt={product.imageAlt}
          src={product.imageSrc}
          fill
          priority={imgPriority}
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
        <div className="mt-2 flex flex-col gap-2.5">
          <VariantSelector
            items={[
              {
                label: "XS",
                id: "SizeXS",
                value: "#595759",
                type: "text",
              },
              {
                label: "S",
                id: "SizeS",
                value: "#d2d3d4",
                type: "text",
              },
              {
                label: "M",
                id: "SizeM",
                value: "#d89f97",
                type: "text",
              },
              {
                label: "L",
                id: "SizeL",
                value: "#afbfab",
                type: "text",
              },
              {
                label: "XL",
                id: "SizeXL",
                value: "#91a5bb",
                type: "text",
              },
            ]}
            id="colose_123"
            productId={String(product.id)}
          />
          <VariantSelector
            items={[
              {
                label: "Space Gray",
                id: "ColorSg",
                value: "#595759",
                type: "color",
              },
              {
                label: "Silver",
                id: "ColorS",
                value: "#d2d3d4",
                type: "color",
              },
              {
                label: "Pink",
                id: "ColorP",
                value: "#d89f97",
                type: "color",
              },
              {
                label: "Green",
                id: "ColorG",
                value: "#afbfab",
                type: "color",
              },
              {
                label: "Blue",
                id: "ColorSb",
                value: "#91a5bb",
                type: "color",
              },
            ]}
            id="coloe_123"
            productId={String(product.id)}
          />
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
