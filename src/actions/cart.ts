"use server";
import { execute } from "@/graphql/execute";
import {
  Cart,
  CartItemInput,
  Mutation,
  MutationAddProductsToCartArgs,
} from "@/types/backend";
import {
  AddProductsToCartMutation,
  CreateCartMutation,
} from "./graphql/mutations";
import { cookies } from "next/headers";

export async function createGuestCart(): Promise<string> {
  try {
    const response: Pick<Mutation, "createGuestCart"> =
      await execute(CreateCartMutation);
    const cartId = response.createGuestCart?.cart?.id;
    if (!cartId) {
      throw new Error("Failed to create guest cart");
    }
    return cartId;
  } catch {
    console.log("Failed to create guest cart");
    throw new Error("Failed to add to cart");
  }
}

export async function addProductsToCartCart(
  cartItems: CartItemInput[],
): Promise<Cart | undefined> {
  try {
    const cookieStore = await cookies();
    let cartId = cookieStore.get("app_cart_id")?.value;
    if (!cartId) {
      const createdCartId = await createGuestCart();
      cookieStore.set("app_cart_id", createdCartId);
      cartId = createdCartId;
    }
    const response = await execute<
      Pick<Mutation, "addProductsToCart">,
      MutationAddProductsToCartArgs
    >(AddProductsToCartMutation, {
      cartId,
      cartItems,
    });
    if (response?.addProductsToCart?.user_errors?.length) {
      throw new Error(response?.addProductsToCart?.user_errors?.[0]?.message);
    }
    return response?.addProductsToCart?.cart;
  } catch (error) {
    console.log("Failed to add to cart", (error as Error)?.message);
    throw new Error("Failed to add to cart");
  }
}
