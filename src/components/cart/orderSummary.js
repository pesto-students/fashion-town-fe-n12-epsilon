import React from "react";
import Payment from "../payment/payment";
import { Row, Col, Typography, Card } from "antd";
import { HorizontalLine, NextButton } from "./cartStyledComponent";

import { connect } from "react-redux";
const { Title, Text } = Typography;

function OrderSummary(props) {
  const { cart, dispatch, step } = props;
  const DeliveryCharge = 50;

  const nextStep = () => {
    dispatch({ type: "STEP", payload: 1 });
  };

  const calculateTotalMRP = () => {
    let totalMRP = 0;
    cart.forEach((product) => {
      const productTotalPrice = product.price * product.qty;
      totalMRP += productTotalPrice;
    });
    return totalMRP + DeliveryCharge;
  };

  // if cart has Items ? show summary
  if (cart.length) {
    return (
      <Card style={{ width: 300 }}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text type="secondary">PRICE DETAILS</Text>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text type="secondary">({cart.length} Items)</Text>
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text>Total MRP</Text>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            Rs. {calculateTotalMRP()}
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text>Delivery charges</Text>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            Rs. 50
          </Col>
        </Row>
        <HorizontalLine />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text strong>Total Amount</Text>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Text strong> Rs. {calculateTotalMRP()}</Text>
          </Col>
        </Row>

        {step === 0 && (
          <NextButton block onClick={nextStep}>
            CONTINUE
          </NextButton>
        )}

        {step === 2 && <Payment calculateTotalMRP={calculateTotalMRP} />}
      </Card>
    );
  } else {
    return <></>;
  }
}

function mapStateToProps(state) {
  return { cart: state.Cart.cart, step: state.Cart.step };
}

export default connect(mapStateToProps)(OrderSummary);
