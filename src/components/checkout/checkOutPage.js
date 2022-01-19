import React, { useEffect } from "react";
import { connect } from "react-redux";

import { useMutation } from "@apollo/client";
import { ORDER_DETAILS_MUTATION } from "../../graphQlQueries/orderDetails";

import { Row, Col } from "antd";
import { CheckoutPageWrapper } from "./checkoutStyledComponent";

import CartList from "../cart/cartList";
import OrderSummary from "./orderSummary";
import CheckOutSteps from "./checkOutSteps";
import AddressDisplay from "../address/addressDisplay";
import AddressForm from "../address/addressForm";
import PaymentResult from "../payment/paymentResult";
import config from "../../config/config";
import { setStatus } from "../../redux/actions/cartActions";

function CheckOutPage(props) {
  const { cart, address, step, order, storeAuth } = props;
  const deliveryCharge = config.deliveryCharge;

  const calculateTotalMRP = () => {
    let totalMRP = 0;
    cart.forEach((product) => {
      const productTotalPrice = product.price * product.qty;
      totalMRP += productTotalPrice;
    });
    return parseInt(totalMRP + deliveryCharge);
  };

  const [createNewOrder, { error, loading, data }] = useMutation(
    ORDER_DETAILS_MUTATION,
    {
      variables: {
        id: order.id,
        orderByEmailId: storeAuth.email,
        address: JSON.stringify(address),
        items: order.OrderItems,
        totalPrice: calculateTotalMRP(),
        paymentDetails: JSON.stringify(order.paymentDetails),
      },
    }
  );

  const pushOrderDetailsToBackend = () => {
    props.setStatus(4);
    createNewOrder();
  };

  useEffect(() => {
    if (step === 3) {
      pushOrderDetailsToBackend();
    }
  }, [step]);

  return (
    <CheckoutPageWrapper>
      <Row>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
        <Col xs={24} sm={8} md={8} lg={16}>
          <>
            {step !== 3 && (
              <>
                <Row>
                  <CheckOutSteps />
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    {step === 0 && <CartList />}
                    {step === 1 && <AddressForm />}
                    {step === 2 && <AddressDisplay />}
                  </Col>
                  {step !== null && (
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <OrderSummary calculateTotalMRP={calculateTotalMRP} />
                    </Col>
                  )}
                </Row>
              </>
            )}
            {step === 4 && (
              <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <PaymentResult />
                </Col>
              </Row>
            )}
          </>
        </Col>
        <Col xs={0} sm={4} md={4} lg={4}></Col>
      </Row>
    </CheckoutPageWrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.Cart.cart,
    address: state.Cart.address,
    step: state.Cart.step,
    storeAuth: state.Auth.storeAuth,
    order: state.Order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
