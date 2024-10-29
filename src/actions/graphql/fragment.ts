export const PageInfoFragment = /* GraphQL */ `
  fragment PageInfoFragment on SearchResultPageInfo {
    current_page
    page_size
    total_pages
  }
`;
export const PriceRangeFragment = /* GraphQL */ `
  fragment PriceRangeFragment on PriceRange {
    minimum_price {
      regular_price {
        value
        currency
      }
      final_price {
        value
        currency
      }
      discount {
        percent_off
        amount_off
      }
    }
    maximum_price {
      regular_price {
        value
        currency
      }
      final_price {
        value
        currency
      }
      discount {
        percent_off
        amount_off
      }
    }
  }
`;
export const CustomizableOptionsFragment = /* GraphQL */ `
  fragment CustomizableOptionsFragment on SelectedCustomizableOption {
    type
    customizable_option_uid
    label
    is_required
    values {
      label
      value
      price {
        type
        units
        value
      }
    }
  }
`;
export const CartItemFragment = /* GraphQL */ `
  fragment CartItemFragment on CartItemInterface {
    __typename
    uid
    quantity
    is_available
    errors {
      code
      message
    }
    prices {
      price {
        value
        currency
      }
      discounts {
        amount {
          value
          currency
        }
        label
      }
      total_item_discount {
        value
        currency
      }
      row_total {
        value
        currency
      }
      row_total_including_tax {
        value
        currency
      }
      price_including_tax {
        value
        currency
      }
      fixed_product_taxes {
        amount {
          value
          currency
        }
        label
      }
    }
    product {
      name
      sku
      thumbnail {
        url
        label
      }
      url_key
      url_suffix
      categories {
        url_path
        url_key
      }
      custom_attributesV2(filters: { is_visible_on_front: true }) {
        items {
          code
          ... on AttributeValue {
            value
          }
          ... on AttributeSelectedOptions {
            selected_options {
              value
              label
            }
          }
        }
      }
      only_x_left_in_stock
      stock_status

      price_range {
        ...PriceRangeFragment
      }
    }
    ... on SimpleCartItem {
      customizable_options {
        ...CustomizableOptionsFragment
      }
    }
    ... on ConfigurableCartItem {
      configurable_options {
        configurable_product_option_uid
        option_label
        value_label
      }
      configured_variant {
        uid
        sku
        only_x_left_in_stock
        stock_status
        thumbnail {
          label
          url
        }
        price_range {
          ...PriceRangeFragment
        }
      }
      customizable_options {
        ...CustomizableOptionsFragment
      }
    }
    ... on DownloadableCartItem {
      links {
        sort_order
        title
      }
      customizable_options {
        ...CustomizableOptionsFragment
      }
    }
    ... on BundleCartItem {
      bundle_options {
        uid
        label
        values {
          uid
          label
        }
      }
    }
    ... on GiftCardCartItem {
      message
      recipient_email
      recipient_name
      sender_email
      sender_name
      amount {
        currency
        value
      }
      is_available
    }
  }
  ${PriceRangeFragment}
  ${CustomizableOptionsFragment}
`;
export const CartFragment = /* GraphQL */ `
  fragment CartFragment on Cart {
    id
    total_quantity
    is_virtual
    prices {
      subtotal_with_discount_excluding_tax {
        currency
        value
      }
      subtotal_including_tax {
        currency
        value
      }
      subtotal_excluding_tax {
        currency
        value
      }
      grand_total {
        currency
        value
      }
      applied_taxes {
        label
        amount {
          value
          currency
        }
      }
      discounts {
        amount {
          value
          currency
        }
        label
      }
    }
    itemsV2(pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      items {
        ...CartItemFragment
      }
      page_info {
        ...PageInfoFragment
      }
      total_count
    }
    shipping_addresses {
      country {
        code
      }
      region {
        code
      }
      postcode
    }
  }
  ${PageInfoFragment}
  ${CartItemFragment}
`;
