import React from "react";
import { connect } from "react-redux";

import { CartBox, CheckoutButtonWrapper } from "./cartStyledComponent";
import { Link } from "react-router-dom";
import CartList from "./cartList";
import { Button, Row, Col } from "antd";

function CartPopUp(props) {
  const {dispatch} = props

  return (
    <CartBox>
      <Row style={{maxHeight:"350px",overflowY:"scroll"}}>
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
              <Link to={`/checkout`} onClick={()=> dispatch({ type: "STEP", payload: 0 })}>CHECKOUT</Link>
            </Button>
          </CheckoutButtonWrapper>
        </Col>
      </Row>
    </CartBox>
  );
}
 export default connect(null, null)(CartPopUp);
