import React, { useState } from "react";
import { connect } from "react-redux";
import config from "config/config";

import _ from "lodash";
import {
  ProductDescriptionWrapper,
  TaxText,
  HorizontalLine,
  ActionButtonWrapper,
  ProductSubText,
  SizeButton,
  ProductTitle,
  AddToCartButton,
} from "./productDetailsStyledComponent";

import { Row, Col, Space, Typography } from "antd";
import { setCart } from "redux/actions/cartActions";
import openNotification from "components/notification/messageNotification";
const { Title, Text } = Typography;

function ProductDescription({ productDetails, setCart, cart }) {
  const [sizeSelected, setSizeSelected] = useState(null);
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

  // const onSearch = (value) => console.log(value);  // To be implemented in 2nd phase

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
      openNotification(`Cart Full`, "error");
      return cart;
    }
    const cartArray = [...cart];

    const indexOfProductInCart = getIndexOfProductInCart(cartArray, product);
    if (indexOfProductInCart !== null) {
      const quantity = cartArray[indexOfProductInCart].qty++;
      openNotification(`Item Quantity increased to ${quantity + 1}`, "success");
    } else {
      cartArray.push(product);
      openNotification("Item added to cart", "success");
    }
    return cartArray;
  };

  const isSizeSelected = () => {
    if (
      productDetails.product_category === "Clothing" &&
      sizeSelected === null
    ) {
      openNotification("Please Select Size", "error");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (isSizeSelected()) {
      let cartItems = cart;

      if (_.isEmpty(cart)) {
        cartItems = [product];
        openNotification("Item added to cart", "success");
      } else {
        cartItems = getUpdatedCart(cartItems, product);
      }

      setCart(cartItems);
    }
  };

  return (
    <ProductDescriptionWrapper>
      <Space direction="vertical">
        <Title level={3}>{productDetails.brand}</Title>
        <ProductTitle>{productDetails.title}</ProductTitle>
        <HorizontalLine />
        <Title level={3}>Rs. {productDetails.price}</Title>
        <TaxText>inclusive of all taxes</TaxText>

        {productDetails.product_category === "Clothing" && (
          <>
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
          </>
        )}
        <ActionButtonWrapper>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <AddToCartButton block onClick={addToCart}>
                ADD TO BAG
              </AddToCartButton>
            </Col>
          </Row>
        </ActionButtonWrapper>
        <HorizontalLine />

        {/**
         * Implement pin code availability in Phase 2 of development
         */}
        {/* <Text strong>DELIVERY AVAILABILITY</Text>
        <Row lg={12}>
          <Col>
            <Search
              placeholder="Enter a PIN code"
              size="large"                                   
              onSearch={onSearch}
            />
          </Col>
        </Row>
        <TaxText>
          Please enter PIN code to check Delivery Availability
        </TaxText> */}

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

const mapStateToProps = ({ Cart }) => {
  return { cart: Cart.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (cart) => {
      dispatch(setCart(cart));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
