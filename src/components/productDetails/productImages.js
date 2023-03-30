import React from "react";
import { Row, Col, Image } from "antd";
import { ProductImageCol } from "./productDetailsStyledComponent";

function ProductImages({ productDetails }) {
  return (
    <Col xs={24} sm={24} md={12} lg={12}>
      <Row>
        {productDetails.images.map((image, index) => {
          return (
            <ProductImageCol xs={24} sm={12} md={12} lg={12} key={index}>
              <Image src={image} width={"100%"} />
            </ProductImageCol>
          );
        })}
      </Row>
    </Col>
  );
}

export default ProductImages;
