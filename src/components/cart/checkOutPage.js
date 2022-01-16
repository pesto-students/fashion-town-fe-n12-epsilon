import React from "react";
import { connect } from "react-redux";

import CartList from "./cartList";

import { Row, Col, Typography, Space } from "antd";
import { CheckoutPageWrapper } from "./cartStyledComponent";
import OrderSummary from "./orderSummary";
import CheckOutSteps from "./checkOutSteps";
import AddressDisplay from "./addressDisplay";
import AddressForm from "./addressForm";
import PaymentResult from "../payment/paymentResult";

const { Title } = Typography;

function CheckOutPage(props) {
  const { cart, address, step } = props;

  return (
    <CheckoutPageWrapper>
      <Row>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
        <Col xs={24} sm={8} md={8} lg={16}>
          <>
            {step !== 3 && (
              <>
                <Row>
                  <CheckOutSteps />
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    {step === 0 && <CartList />}
                    {step === 1 && <AddressForm />}
                    {step === 2 && <AddressDisplay />}
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <OrderSummary />
                  </Col>
                </Row>
              </>
            )}
            {step === 3 && (
              <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <PaymentResult />
                </Col>
              </Row>
            )}
          </>
        </Col>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
      </Row>
    </CheckoutPageWrapper>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.Cart.cart,
    address: state.Cart.address,
    step: state.Cart.step,
  };
}

export default connect(mapStateToProps)(CheckOutPage);
