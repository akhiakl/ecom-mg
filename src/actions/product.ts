"use server";

import { graphql } from "@/graphql";
import { execute } from "@/graphql/execute";
import { Product } from "@/types/product";

const ProductsQuery = graphql(`
  query productsSearch(
    $pageSize: Int = 10
    $currentPage: Int = 1
    $sort: ProductAttributeSortInput = {}
    $filter: ProductAttributeFilterInput = {}
  ) {
    products(
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
      filter: $filter
    ) {
      total_count
      items {
        name
        sku
        url_key
        image {
          url
          label
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      page_info {
        page_size
        current_page
      }
    }
  }
`);

export async function fetchProducts(): Promise<Product[]> {
  const response = await execute(ProductsQuery, {
    pageSize: 12,
    currentPage: 1,
  });
  if (!response.products?.items?.length) return [];
  return response.products?.items
    ?.filter((item) => !!item)
    .map((item) => ({
      id: item.sku!,
      name: item.name!,
      urlKey: item.url_key!,
      imageSrc: item.image?.url,
      imageAlt: item.image?.label,
      price: `${item.price_range.minimum_price.regular_price.currency}${item.price_range.minimum_price.regular_price.value}`,
      color: "string",
    }));
}
