import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PRODUCT_BY_ID_FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductImages from "./productImages";
import ProductDescription from "./productDescription";

import { Row, Col } from "antd";
import { ProductDetailsWrapper } from "./productDetailsStyledComponent";
import ServerError from "../result/serverError";
import DefaultLoading from "../loadingSkeleton/defaultLoading";

function ProductDetailsPage() {
  const { id } = useParams();

  const { error, loading, data } = useQuery(PRODUCT_BY_ID_FILTER_QUERY, {
    variables: { productId: id },
  });

  if (loading) {
    return (<DefaultLoading/>)
  }
  if (error) {
    return(<ServerError/>)
  }
  if (data) {
    console.log(data);
    const productDetails = data.productByFilters[0];

    return (
      <ProductDetailsWrapper>
        <Row>
          <ProductImages productDetails={productDetails} />
          <Col xs={24} sm={24} md={12} lg={12}>
            <ProductDescription productDetails={productDetails} />
          </Col>
        </Row>
      </ProductDetailsWrapper>
    );
  }
  return <div></div>;
}

export default ProductDetailsPage;
