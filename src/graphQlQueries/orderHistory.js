import { gql } from "@apollo/client";
export const ORDER_HISTORY_QUERY = gql`
  query getOrderHistoryList($orderByEmailId: String) {
    getOrderHistory(orderByEmailId: $orderByEmailId) {
      items {
        productId
        brand
        title
        image
        qty
        size
        price
      }
      id
      orderByEmailId
      createdOn
    }
  }
`;
