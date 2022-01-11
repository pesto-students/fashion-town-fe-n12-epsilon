import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { connect } from "react-redux";

function cart(props) {
  const { dispatch ,cart} = props;
  console.log(cart)
  return (
    <div>
      <Badge count={cart.length}>
        <ShoppingCartOutlined style={{ fontSize: "30px" }} />
      </Badge>
    </div>
  );
}
function mapStateToProps(state) {
  return { cart: state.Cart.cart };
}

export default connect(mapStateToProps)(cart);
