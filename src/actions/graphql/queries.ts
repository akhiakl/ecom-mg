import { PageInfoFragment, PriceRangeFragment } from "./fragment";

export const ProductsQuery = /* GraphQL */ `
  query productsSearch(
    $pageSize: Int = 10
    $currentPage: Int = 1
    $sort: ProductAttributeSortInput = {}
    $productFilter: ProductAttributeFilterInput = {}
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
      filter: $productFilter
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
      sort_fields {
        options {
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
          ...PriceRangeFragment
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
        ...PageInfoFragment
      }
      total_count
    }
  }
  ${PageInfoFragment}
  ${PriceRangeFragment}
`;
