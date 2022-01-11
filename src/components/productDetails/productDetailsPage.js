import React, { useState } from "react";
import { Row, Col, Image, Space, Input } from "antd";
import {
  ProductDetailsWrapper,
  ProductDescriptionWrapper,
  TaxText,
  HorizontalLine,
  ActionButtonWrapper,
  ProductSubText,
} from "./productDetailsStyledComponent";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PRODUCT_BY_ID_FILTER_QUERY } from "../../graphQlQueries/filterQuery";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;
function ProductDetailsPage(props) {
  const { id } = useParams();
  const [sizeSelected, setSizeSelected] = useState(null);
  const sizeArray = ["s", "m", "l"];

  const { error, loading, data } = useQuery(PRODUCT_BY_ID_FILTER_QUERY, {
    variables: { productId: id },
  });
  const onSearch = (value) => console.log(value);

  if (loading) {
    console.log("loding ..");
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
    const productDetails = data.productByFilters[0];
    return (
      <ProductDetailsWrapper>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Row>
              {productDetails.images.map((image, index) => {
                return (
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={12}
                    style={{ padding: 2 }}
                    key={index}
                  >
                    <Image src={image} width={"100%"} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <ProductDescriptionWrapper>
              <Space direction="vertical">
                <Title level={3}>{productDetails.brand}</Title>
                <Text style={{ fontSize: "1.3em" }}>
                  {productDetails.title}
                </Text>
                <HorizontalLine />
                <Title level={3}>Rs. {productDetails.price}</Title>
                <TaxText>inclusive of all taxes</TaxText>

                {productDetails.product_category === "Clothing" && (
                  <div>
                    <Title level={5}>SELECT SIZE</Title>
                    <ActionButtonWrapper>
                      <Space size={"large"}>
                        {sizeArray.map((size, index) => {
                          return (
                            <Button
                              key={index}
                              shape="circle"
                              size="large"
                              onClick={() => setSizeSelected(size)}
                              style={{
                                borderColor:
                                  sizeSelected === size ? "orange" : "",
                                color: sizeSelected === size ? "orange" : "",
                                height: "60px",
                                width: "60px",
                              }}
                            >
                              {size.toUpperCase()}
                            </Button>
                          );
                        })}
                      </Space>
                    </ActionButtonWrapper>
                  </div>
                )}
                <ActionButtonWrapper>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Button
                        block
                        style={{
                          background: "#FF7F3F",
                          borderRadius: "5px",
                          color: "white",
                          height: "60px",
                        }}
                      >
                        ADD TO BAG
                      </Button>
                    </Col>
                  </Row>
                </ActionButtonWrapper>
                <HorizontalLine />
                <Text strong>DELIVERY AVAILABILITY</Text>
                <Row lg={12}>
                  <Col>
                    <Search
                      placeholder="Enter a PIN code"
                      size="large"
                      onSearch={onSearch}
                    />
                  </Col>
                </Row>
                <TaxText style={{ color: "black" }}>
                  Please enter PIN code to check Delivery Availability
                </TaxText>
                <ProductSubText>100% Original Products</ProductSubText>
                <HorizontalLine />
                <Text strong>PRODUCT DETAILS</Text>
                <ProductSubText>
                  {productDetails.product_details}
                </ProductSubText>
                <Text strong>Size & fit</Text>
                <ProductSubText>{productDetails.size_fit}</ProductSubText>
                <Text strong>Material & Care</Text>
                <ProductSubText>
                  {productDetails.care_instructions}
                </ProductSubText>
              </Space>
            </ProductDescriptionWrapper>
          </Col>
        </Row>
      </ProductDetailsWrapper>
    );
  }
  return <div></div>;
}

function mapStateToProps(state) {
  return { productIdDetailsMap: state.Product.productIdDetailsMap };
}

export default connect(mapStateToProps)(ProductDetailsPage);

// __typename: "Product"
// ​​​
// brand: "Manyavar"
// ​​​
// dominant_color: "Yellow"
// ​​​
// ideal_for: "Men"
// ​​​
// images: Array [ "http://assets.myntassets.com/v1/assets/images/7705322/2018/1…Fit-Banded-Collar-Kurta--Churidar-Set-4991540807741431-1.jpg" ]
// ​​​
// price: "2999"
// ​​​
// product_id: "7705322"
// ​​​
// title: "Manyavar Men Yellow & White Self Design Kurta with Churidar"
