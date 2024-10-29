/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use server";
import { execute } from "@/graphql/execute";
import { ConfigurableProduct, Query } from "@/types/backend";
import { Category, Product } from "@/types/product";
import { ProductsQuery } from "./graphql/queries";

const colorHashRegex = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i;

const mapItemToProduct = (item: ConfigurableProduct): Product => ({
  id: item.uid,
  sku: item.sku!,
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
          type: colorHashRegex.test(val?.swatch_data?.value ?? "")
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
      productFilter: {
        category_url_path: {
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
    availableSortOptions: response?.products?.sort_fields?.options?.sort(
      (a, b) => {
        if (a?.value === response?.products?.sort_fields) return -1;
        if (b?.value === response?.products?.sort_fields?.default) return 1;
        return 0;
      },
    ) as Category["availableSortOptions"],
  };
}
