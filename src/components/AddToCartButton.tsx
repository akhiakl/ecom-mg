"use client";
import React, { MouseEvent } from "react";
import Button from "./ui/Button";
import { addProductsToCartCart } from "@/actions/cart";
import { CartItemInput } from "@/types/backend";

type AddToCartButtonProps = {
  sku: CartItemInput["sku"];
};

const AddToCartButton = ({ sku }: AddToCartButtonProps) => {
  return (
    <Button
      size="sm"
      variant="primary"
      onClick={(e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addProductsToCartCart([
          {
            sku,
            quantity: 1,
          } as CartItemInput,
        ]);
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
