import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PRODUCT_BY_ID_FILTER_QUERY } from "../../graphQlQueries/filterQuery";

import ProductImages from "./productImages";
import ProductDescription from "./productDescription";

import { Row, Col } from "antd";
import { ProductDetailsWrapper } from "./productDetailsStyledComponent";
import ServerError from "../result/serverError";
import DefaultLoading from "../loadingAnimations/defaultLoading";

function ProductDetailsPage() {
  const { id } = useParams();

  const { error, loading, data } = useQuery(PRODUCT_BY_ID_FILTER_QUERY, {
    variables: { productId: id },
  });

  return (
    <>
      {loading && <DefaultLoading />}
      {data && (
        <ProductDetailsWrapper>
          <Row>
            <ProductImages productDetails={data.productDetails} />
            <Col xs={24} sm={24} md={12} lg={12}>
              <ProductDescription productDetails={data.productDetails} />
            </Col>
          </Row>
        </ProductDetailsWrapper>
      )}
      {error && <ServerError />}
    </>
  );
}

export default ProductDetailsPage;
