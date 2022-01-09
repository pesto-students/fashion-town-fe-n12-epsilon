import { gql } from "@apollo/client";
export const FILTER_QUERY = gql`
  query getProduct(
    $brand: [String]
    $productCategory: String
    $idealFor: String
    $dominantColor: [String]
  ) {
    productByFilters(
      brand: $brand
      product_category: $productCategory
      ideal_for: $idealFor
      dominant_color: $dominantColor
    ) {
      product_id
      brand
      title
      images
      price
      dominant_color
      ideal_for
    }
  }
`;
