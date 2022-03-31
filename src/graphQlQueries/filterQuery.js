import { gql } from "@apollo/client";
export const FILTER_QUERY = gql`
  query getProduct(
    $productId: String
    $brand: [String]
    $productCategory: [String]
    $idealFor: [String]
    $dominantColor: [String]
    $page: [String]
    $itemCount: [String]
  ) {
    productByFilters(
      product_id: $productId
      brand: $brand
      product_category: $productCategory
      ideal_for: $idealFor
      dominant_color: $dominantColor
      page: $page
      itemCount: $itemCount
    ) {
      products {
        product_id
        brand
        title
        images
        price
      }
      totalCount
    }
  }
`;

export const PRODUCT_BY_ID_FILTER_QUERY = gql`
  query getProductById(
    $productId: String
    $brand: [String]
    $productCategory: [String]
    $idealFor: [String]
    $dominantColor: [String]
  ) {
    productByFilters(
      product_id: $productId
      brand: $brand
      product_category: $productCategory
      ideal_for: $idealFor
      dominant_color: $dominantColor
    ) {
      products {
        product_id
        product_details
        brand
        title
        images
        price
        dominant_color
        size_fit
        care_instructions
        ideal_for
        product_category
      }
    }
  }
`;
