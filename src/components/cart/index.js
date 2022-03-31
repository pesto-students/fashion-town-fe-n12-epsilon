import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Badge, Col, Dropdown } from "antd";

import CartPopUp from "./cartPopUp";
import { CartIcon, CartText } from "./cartStyledComponent";
import links from "config/routeLinks";
import openNotification from "components/notification/messageNotification";

function Cart({ cart }) {
  const handleCartIconClick = () => {
    if (cart.length === 0) {
      openNotification("Your cart is empty", "error");
    } 
  };
  return (
    <>
      <Col xs={0} sm={0} md={0} lg={0} xl={24}>
        <Dropdown
          trigger={["click"]}
          overlay={<CartPopUp cart={cart} />}
          placement="bottomLeft"
          disabled={cart.length <= 0}
          overlayStyle={{ background: "white", width: "500px" }}
        >
          <Badge count={cart.length}>
            <CartIcon onClick={handleCartIconClick} />
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
const mapStateToProps = ({ Cart }) => {
  return { cart: Cart.cart };
};

export default connect(mapStateToProps)(Cart);
