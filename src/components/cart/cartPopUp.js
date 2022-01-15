import React from "react";
import { CartBox, CheckoutButtonWrapper } from "./cartStyledComponent";
import { Link } from "react-router-dom";
import CartList from "./cartList";
import { Button, Row, Col } from "antd";

function CartPopUp() {
  return (
    <CartBox>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CartList />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CheckoutButtonWrapper>
            <Button
              block
              style={{
                background: "#FF7F3F",
                borderRadius: "5px",
                color: "white",
              }}
            >
              <Link to={`/checkout`}>CHECKOUT</Link>
            </Button>
          </CheckoutButtonWrapper>
        </Col>
      </Row>
    </CartBox>
  );
}

export default CartPopUp;
