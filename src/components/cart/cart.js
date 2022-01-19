import React from "react";

import { connect } from "react-redux";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Dropdown } from "antd";

import CartPopUp from "./cartPopUp";

function Cart(props) {
  const { cart } = props;

  return (
    <div>
      <Dropdown
        overlay={<CartPopUp cart={cart} />}
        placement="bottomLeft"
        disabled={cart.length <= 0}
        overlayStyle={{ background: "white", width: "500px" }}
      >
        <Badge count={cart.length}>
          <ShoppingCartOutlined style={{ fontSize: "30px" }} />
        </Badge>
      </Dropdown>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { cart: state.Cart.cart };
};

export default connect(mapStateToProps)(Cart);
