import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartBox, CheckoutButtonWrapper } from "./cartStyledComponent";
import { Button, Row, Col } from "antd";

import CartList from "./cartList";
import { setStatus } from "../../redux/actions/cartActions";

function CartPopUp(props) {
  const navigate = useNavigate();
  
  const onClickCheckoutHandler = () => {
    props.setStatus(0);
    navigate("/checkout");
  };

  return (
    <CartBox>
      <Row style={{ maxHeight: "350px", overflowY: "scroll" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CartList />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CheckoutButtonWrapper>
            <Button
              block
              onClick={onClickCheckoutHandler}
              style={{
                background: "#FF7F3F",
                borderRadius: "5px",
                color: "white",
              }}
            >
              CHECKOUT
            </Button>
          </CheckoutButtonWrapper>
        </Col>
      </Row>
    </CartBox>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};
export default connect(null, mapDispatchToProps)(CartPopUp);
