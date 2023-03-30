import { gql } from "@apollo/client";
export const RAZORPAY_ORDER_QUERY = gql`
  mutation createRazorPayOrder($amount: Int, $orderId: String) {
    createRazorPayOrder(input: { amount: $amount, orderId: $orderId }) {
      id
      entity
      amount
      amount_paid
      amount_due
      currency
      receipt
      status
    }
  }
`;
