import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartBox, CheckoutButtonWrapper } from "./cartStyledComponent";
import { Button, Row, Col } from "antd";

import CartList from "./cartList";
import { setStatus } from "../../redux/actions/cartActions";
import { setCurrentPath } from "../../redux/actions/redirectActions";

function CartPopUp(props) {
  const navigate = useNavigate();
  const {storeAuth} = props
  const onClickCheckoutHandler = () => {
    props.setStatus("bag");
    if(storeAuth && storeAuth.email){
      navigate("/checkout");
    }
    else{
      props.setCurrentPath("/checkout")
      navigate("/signIn");
    }
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
      }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPopUp);
