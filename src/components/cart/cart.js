import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Dropdown } from "antd";
import CartList from "./cartList";

function Cart(props) {
  const {isCartUpdated } = props;
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart !== "undefined" && cart !== null) {
      console.log(cart);
      cart = JSON.parse(cart);
      setCart(cart);
      setCartCount(cart.length);
    }
  }, [isCartUpdated]);

  return (
    <div>
      <Dropdown
        overlay={<CartList cart={cart} />}
        placement="bottomLeft"
        disabled={cartCount <= 0}
        overlayStyle={{ background: "white", width: "500px" }}
      >
        <Badge count={cartCount}>
          <ShoppingCartOutlined style={{ fontSize: "30px" }} />
        </Badge>
      </Dropdown>
    </div>
  );
}


export default Cart;
