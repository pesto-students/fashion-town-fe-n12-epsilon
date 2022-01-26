import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { connect } from "react-redux";

import Payment from "../payment/payment";
import { Row, Col, Typography, Card } from "antd";
import { HorizontalLine, NextButton } from "./checkoutStyledComponent";
import { setStatus } from "../../redux/actions/cartActions";
import { setCurrentPath } from "../../redux/actions/redirectActions";
import links from "../../config/routeLinks";

const { Text } = Typography;

function OrderSummary(props) {
  const {
    cart,
    status,
    storeAuth,
    calculateTotalMRP,
    setCurrentPath,
    setStatus,
  } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const goToLogInPage = () => {
    console.log(location);
    const currentPath = location.pathname + location.search;
    setCurrentPath(currentPath);
    navigate(links.signIn);
  };

  const nextStep = () => {
    if (storeAuth && storeAuth.email) {
      setStatus("address");
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

        {status === "bag" && (
          <NextButton block onClick={nextStep}>
            CONTINUE
          </NextButton>
        )}
        {status === "payment" && (
          <Payment calculateTotalMRP={calculateTotalMRP} />
        )}
      </Card>
    );
  } else {
    return <></>;
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.Cart.cart,
    address: state.Cart.address,
    status: state.Cart.status,
    storeAuth: state.Auth.storeAuth,
    order: state.Order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPath: (currentPath) => {
      dispatch(setCurrentPath(currentPath));
    },
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
