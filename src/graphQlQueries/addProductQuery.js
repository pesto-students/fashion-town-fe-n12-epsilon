import { gql } from "@apollo/client";
export const ADD_PRODUCT_MUTATION = gql`
  mutation addNewProduct(
    $brand: String
    $title: String
    $dominant_color: String
    $price: String
    $ideal_for: String
    $product_details: String
    $product_category: String
    $size_fit: String
    $care_instructions: String
    $images: [String]
    $body: String
  ) {
    addProduct(
      input: {
        brand: $brand
        title: $title
        dominant_color: $dominant_color
        price: $price
        ideal_for: $ideal_for
        product_details: $product_details
        product_category: $product_category
        images: $images
        size_fit: $size_fit
        care_instructions: $care_instructions
        body: $body
      }
    )
  }
`;
