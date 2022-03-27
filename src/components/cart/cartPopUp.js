import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  CartBox,
  CartBoxRow,
  CheckoutButtonWrapper,
} from "./cartStyledComponent";
import { Row, Col } from "antd";

import CartList from "./cartList";
import { setStatus } from "redux/actions/cartActions";
import { setCurrentPath } from "redux/actions/redirectActions";
import { ActionButton } from "components/globalStyledComponent";
import links from "config/routeLinks";

function CartPopUp({ storeAuth, setStatus, setCurrentPath, cart }) {
  const navigate = useNavigate();
  const onClickCheckoutHandler = () => {
    setStatus("bag");
    if (storeAuth && storeAuth.email) {
      navigate(links.checkout);
    } else {
      setCurrentPath("/" + links.checkout);
      navigate(links.signIn);
    }
  };

  return (
    <CartBox>
      <CartBoxRow>
        <Col xs={24} sm={24} md={24} lg={24}>
          <CartList />
        </Col>
      </CartBoxRow>
      {cart.length && (
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <CheckoutButtonWrapper>
              <ActionButton
                block
                background={"#FF7F3F"}
                onClick={onClickCheckoutHandler}
              >
                CHECKOUT
              </ActionButton>
            </CheckoutButtonWrapper>
          </Col>
        </Row>
      )}
    </CartBox>
  );
}

const mapStateToProps = ({ Auth, Cart }) => {
  return {
    storeAuth: Auth.storeAuth,
    cart: Cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
    setCurrentPath: (currentPath) => {
      dispatch(setCurrentPath(currentPath));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPopUp);
