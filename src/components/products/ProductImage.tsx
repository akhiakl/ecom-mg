/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Image, { ImageProps } from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = ImageProps & {
  productIndex: number;
};

const ProductImage = ({ productIndex, ...props }: Props) => {
  const isMobile = useMediaQuery("(min-width: 640)");
  const isTablet = useMediaQuery("(min-width: 1024px)");
  const imagePriorityLimit = isMobile ? 2 : isTablet ? 4 : 8;
  return (
    <Image
      fill
      priority={productIndex < imagePriorityLimit}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      className="object-contain transition duration-500 group-hover:scale-105"
      {...props}
    />
  );
};

export default ProductImage;
