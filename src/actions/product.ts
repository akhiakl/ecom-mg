/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use server";
import { execute } from "@/graphql/execute";
import { ConfigurableProduct, Query } from "@/types/backend";
import { Category, Product } from "@/types/product";

const ProductsQuery = /* GraphQL */ `
  query productsSearch(
    $pageSize: Int = 10
    $currentPage: Int = 1
    $sort: ProductAttributeSortInput = {}
    $filter: ProductAttributeFilterInput = {}
    $includeCategory: Boolean = false
    $categoryFilter: CategoryFilterInput
  ) {
    categories(filters: $categoryFilter) @include(if: $includeCategory) {
      items {
        name
        url_path
        uid
        meta_title
        meta_keywords
        meta_description
      }
    }
    products(
      pageSize: $pageSize
      currentPage: $currentPage
      sort: $sort
      filter: $filter
    ) {
      aggregations {
        attribute_code
        count
        label
        position
        options {
          count
          label
          value
        }
      }
      items {
        uid
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
        ... on ConfigurableProduct {
          configurable_options {
            attribute_code
            attribute_uid
            uid
            label
            values {
              uid
              label
              swatch_data {
                value
                ... on ImageSwatchData {
                  thumbnail
                }
              }
            }
          }
        }
      }
      page_info {
        page_size
        current_page
        total_pages
      }
      total_count
    }
  }
`;

const mapItemToProduct = (item: ConfigurableProduct): Product => ({
  id: item.sku!,
  name: item.name!,
  urlKey: item.url_key!,
  imageSrc: item.image?.url!,
  imageAlt: item.image?.label!,
  price: `${item.price_range.minimum_price.regular_price.currency}${item.price_range.minimum_price.regular_price.value}`,
  color: "string",
  options:
    item.configurable_options?.map((opt) => ({
      id: opt?.uid!,
      label: opt?.label!,
      values:
        opt?.values?.map((val) => ({
          id: val?.uid!,
          label: val?.label!,
          value: val?.swatch_data?.value!,
          type: /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(
            val?.swatch_data?.value ?? "",
          )
            ? "color"
            : "text",
        })) ?? [],
    })) ?? [],
});

export async function fetchCategory(urlKey: string): Promise<Category> {
  const response: Pick<Query, "products" | "categories"> = await execute(
    ProductsQuery,
    {
      pageSize: 12,
      currentPage: 1,
      includeCategory: true,
      categoryFilter: {
        url_path: {
          eq: urlKey,
        },
      },
    },
  );

  return {
    id: response?.categories?.items?.[0]?.uid!,
    name: response?.categories?.items?.[0]?.name!,
    description: response?.categories?.items?.[0]?.description!,
    urlKey: response?.categories?.items?.[0]?.url_path!,
    products:
      response?.products?.items
        ?.filter((item) => !!item)
        .map((item) => mapItemToProduct(item as ConfigurableProduct)) ?? [],
    availableFilters: response?.products?.aggregations
      ?.sort((a, b) => (a?.position ?? 0) - (b?.position ?? 0))
      ?.map((aggregation) => ({
        code: aggregation?.attribute_code!,
        count: aggregation?.count!,
        label: aggregation?.label!,
        options: aggregation?.options?.map((option) => ({
          count: option?.count!,
          label: option?.label!,
          value: option?.value!,
        })),
      })),
  };
}
