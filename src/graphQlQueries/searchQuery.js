import { gql } from "@apollo/client";
export const SEARCH_TEXT_QUERY = gql`
  query getProduct($searchInput: String) {
    productBySearchInput(searchInput: $searchInput) {
      product_id
      brand
      title
      images
      price
    }
  }
`;
