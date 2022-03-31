import { gql } from "@apollo/client";
export const ORDER_DETAILS_MUTATION = gql`
  mutation createNewOrder(
    $id: String
    $orderByEmailId: String
    $items: [ItemInput]
    $address: String
    $paymentDetails: String
    $totalPrice: Int
  ) {
    createOrder(
      input: {
        id: $id
        orderByEmailId: $orderByEmailId
        items: $items
        totalPrice: $totalPrice
        address: $address
        paymentDetails: $paymentDetails
      }
    ) {
      id
    }
  }
`;
