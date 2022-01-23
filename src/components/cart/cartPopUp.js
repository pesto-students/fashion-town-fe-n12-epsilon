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
import { setStatus } from "../../redux/actions/cartActions";
import { setCurrentPath } from "../../redux/actions/redirectActions";
import { ActionButton } from "../globalStyledComponent/globalStyledComponents";
import links from "../../config/routeLinks";

function CartPopUp(props) {
  const navigate = useNavigate();
  const { storeAuth } = props;
  const onClickCheckoutHandler = () => {
    props.setStatus("bag");
    if (storeAuth && storeAuth.email) {
      navigate(links.checkout);
    } else {
      props.setCurrentPath("/" + links.checkout);
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
    </CartBox>
  );
}

const mapStateToProps = (state) => {
  return {
    storeAuth: state.Auth.storeAuth,
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
