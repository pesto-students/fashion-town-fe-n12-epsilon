import React, { useState } from "react";
import { connect } from "react-redux";
import config from "../../config/config";

import {
  ProductDescriptionWrapper,
  TaxText,
  HorizontalLine,
  ActionButtonWrapper,
  ProductSubText,
  SizeButton,
} from "./productDetailsStyledComponent";

import { Row, Col, Space, Input, message, Typography, Button } from "antd";
import { setCart } from "../../redux/actions/cartActions";
const { Title, Text } = Typography;
const { Search } = Input;

function ProductDescription(props) {
  const [sizeSelected, setSizeSelected] = useState(null);
  const { productDetails } = props;
  const sizeArray = config.sizeArray;

  const product = {
    productId: productDetails.product_id,
    brand: productDetails.brand,
    title: productDetails.title,
    price: productDetails.price,
    image: productDetails.images[0],
    qty: 1,
    size: sizeSelected,
  };

  const onSearch = (value) => console.log(value);

  const isCartFull = (cart) => {
    if (cart.length < config.maxCartSize) {
      return false;
    }
    return true;
  };

  const getIndexOfProductInCart = (cartArray, product) => {
    console.log(cartArray);
    let indexOfProductInCart = null;
    cartArray.forEach((cartProduct, index) => {
      if (
        cartProduct.productId === product.productId &&
        cartProduct.size === product.size
      ) {
        indexOfProductInCart = index;
      }
    });
    return indexOfProductInCart;
  };

  const getUpdatedCart = (cart, product) => {
    if (isCartFull(cart)) {
      message.error(`Cart Full`);
      return cart;
    }
    const cartArray = [...cart];

    const indexOfProductInCart = getIndexOfProductInCart(cartArray, product);
    if (indexOfProductInCart !== null) {
      const quantity = cartArray[indexOfProductInCart].qty++;
      message.success(`Item Quantity increased to ${quantity + 1}`);
    } else {
      cartArray.push(product);
      message.success("Item added to cart");
    }
    return cartArray;
  };

  const isSizeSelected = () => {
    if (
      productDetails.product_category === "Clothing" &&
      sizeSelected === null
    ) {
      message.error("Please Select Size");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (isSizeSelected()) {
      let cart = props.cart;

      if (cart === "undefined" || cart === null) {
        cart = [product];
        message.success("Item added to cart");
      } else {
        cart = getUpdatedCart(cart, product);
      }
      props.setCart(cart);
    }
  };

  return (
    <ProductDescriptionWrapper>
      <Space direction="vertical">
        <Title level={3}>{productDetails.brand}</Title>
        <Text style={{ fontSize: "1.3em" }}>{productDetails.title}</Text>
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
                    <SizeButton
                      key={index}
                      shape="circle"
                      onClick={() => setSizeSelected(size)}
                      selected={sizeSelected}
                      size={size}
                    >
                      {size.toUpperCase()}
                    </SizeButton>
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
                onClick={addToCart}
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
        <ProductSubText>{productDetails.product_details}</ProductSubText>
        <Text strong>Size & fit</Text>
        <ProductSubText>{productDetails.size_fit}</ProductSubText>
        <Text strong>Material & Care</Text>
        <ProductSubText>{productDetails.care_instructions}</ProductSubText>
      </Space>
    </ProductDescriptionWrapper>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.Cart.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (cart) => {
      dispatch(setCart(cart));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
