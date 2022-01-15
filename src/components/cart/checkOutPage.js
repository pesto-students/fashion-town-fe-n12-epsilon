import React from "react";
import { connect } from "react-redux";

import CartList from "./cartList";

import { Row, Col, Typography } from "antd";
import { CheckoutPageWrapper } from "./cartStyledComponent";
import OrderSummary from "./orderSummary";

const { Title } = Typography;

function CheckOutPage(props) {
  const { cart } = props;

  return (
    <CheckoutPageWrapper>
      <Row>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
        <Col xs={24} sm={8} md={8} lg={16}>
          <Row>
            <Title level={4}>BAG</Title>
          </Row>
          <Row>
            <Col xs={24} sm={8} md={8} lg={12}>
              <CartList />
            </Col>
            <Col xs={24} sm={8} md={8} lg={12}>
              <OrderSummary cart={cart} />
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
      </Row>
    </CheckoutPageWrapper>
  );
}
function mapStateToProps(state) {
  return { cart: state.Cart.cart };
}

export default connect(mapStateToProps)(CheckOutPage);
