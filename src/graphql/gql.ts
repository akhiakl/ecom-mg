/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query productsSearch(\n    $pageSize: Int = 10\n    $currentPage: Int = 1\n    $sort: ProductAttributeSortInput = {}\n    $filter: ProductAttributeFilterInput = {}\n  ) {\n    products(\n      pageSize: $pageSize\n      currentPage: $currentPage\n      sort: $sort\n      filter: $filter\n    ) {\n      total_count\n      items {\n        name\n        sku\n        url_key\n        image {\n          url\n          label\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n          }\n        }\n      }\n      page_info {\n        page_size\n        current_page\n      }\n    }\n  }\n": types.ProductsSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query productsSearch(\n    $pageSize: Int = 10\n    $currentPage: Int = 1\n    $sort: ProductAttributeSortInput = {}\n    $filter: ProductAttributeFilterInput = {}\n  ) {\n    products(\n      pageSize: $pageSize\n      currentPage: $currentPage\n      sort: $sort\n      filter: $filter\n    ) {\n      total_count\n      items {\n        name\n        sku\n        url_key\n        image {\n          url\n          label\n        }\n        price_range {\n          minimum_price {\n            regular_price {\n              value\n              currency\n            }\n          }\n        }\n      }\n      page_info {\n        page_size\n        current_page\n      }\n    }\n  }\n"): typeof import('./graphql').ProductsSearchDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
