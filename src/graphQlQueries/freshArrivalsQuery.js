import { gql } from "@apollo/client";
export const FRESH_ARRIVALS_QUERY = gql`
  query getProduct($orderBy: String,$limit: Int) {
    getProductOrderBy(orderBy: $orderBy, limit: $limit) {
      product_id
      brand
      title
      images
      price
    }
  }
`;
