import { CartFragment } from "./fragment";

export const AddProductsToCartMutation = /* GraphQL */ `
  mutation AddProductsToCart(
    $cartId: String!
    $cartItems: [CartItemInput!]!
    $pageSize: Int = 10
    $currentPage: Int = 1
    $sort: QuoteItemsSortInput
  ) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        ...CartFragment
      }
      user_errors {
        code
        message
      }
    }
  }
  ${CartFragment}
`;
export const CreateCartMutation = /* GraphQL */ `
  mutation {
    createGuestCart {
      cart {
        id
      }
    }
  }
`;
