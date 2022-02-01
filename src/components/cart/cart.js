import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Badge, Col, Dropdown } from "antd";

import CartPopUp from "./cartPopUp";
import { CartIcon, CartText } from "./cartStyledComponent";
import links from "../../config/routeLinks";

function Cart({ cart }) {
  return (
    <>
      <Col xs={0} sm={0} md={0} lg={0} xl={24}>
        <Dropdown
          overlay={<CartPopUp cart={cart} />}
          placement="bottomLeft"
          disabled={cart.length <= 0}
          overlayStyle={{ background: "white", width: "500px" }}
        >
          <Badge count={cart.length}>
            <CartIcon />
          </Badge>
        </Dropdown>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={0}>
        <Link to={links.checkout}>
          <CartText>CART</CartText>
        </Link>
      </Col>
    </>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.Cart.cart };
};

export default connect(mapStateToProps)(Cart);
