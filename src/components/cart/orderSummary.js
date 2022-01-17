import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { connect } from "react-redux";



import Payment from "../payment/payment";
import { Row, Col, Typography, Card } from "antd";
import { HorizontalLine, NextButton } from "./cartStyledComponent";

const { Title, Text } = Typography;

function OrderSummary(props) {
 
  const { cart, address, order, dispatch, step, storeAuth,calculateTotalMRP } = props;
  const location = useLocation();
  let navigate = useNavigate();
  const auth = getAuth();
  
  const goToLogInPage = () => {
    console.log(location);
    const currentPath = location.pathname + location.search;
    dispatch({ type: "CURRENT_PATH", payload: currentPath });
    navigate("/signIn");
  };

  



  const nextStep = () => {
    console.log(storeAuth && storeAuth.email);
    if (storeAuth && storeAuth.email) {
      dispatch({ type: "STEP", payload: 1 });
    } else {
      goToLogInPage();
    }
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
  return {
    cart: state.Cart.cart,
    address: state.Cart.address,
    step: state.Cart.step,
    storeAuth: state.Auth.storeAuth,
    order: state.Order,
  };
}

export default connect(mapStateToProps)(OrderSummary);
