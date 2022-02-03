import React from "react";
import { connect } from "react-redux";

import { useMutation } from "@apollo/client";
import { RAZORPAY_ORDER_QUERY } from "../../graphQlQueries/razorPayOrder";
import useRazorpay from "react-razorpay";

import config from "../../config/config";
import moment from "moment";

import { NextButton } from "../cart/cartStyledComponent";

import {
  setOrderId,
  setOrderItems,
  setPaymentDetails,
  setPaymentLoader,
} from "../../redux/actions/orderActions";
import { setCart, setStatus } from "../../redux/actions/cartActions";
import ServerError from "../result/serverError";
import { Spin } from "antd";
import openNotification from "components/notification/messageNotification";

function Payment(props) {
  const {
    address,
    cart,
    setOrderItems,
    setCart,
    setOrderId,
    setPaymentDetails,
    setStatus,
    calculateTotalMRP,
  } = props;

  const Razorpay = useRazorpay();

  const amount = parseInt(Math.floor(calculateTotalMRP()) + "00");
  const orderId = "P" + moment().format("YYYYMMDDHHmmss");

  const [getRazorPayOrder, { error, loading, data, reset }] = useMutation(
    RAZORPAY_ORDER_QUERY,
    {
      variables: { amount: amount, orderId: orderId },
    }
  );

  const handlePayment = async (OrderPrams) => {
    const options = {
      key: process.env.REACT_APP_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: OrderPrams.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: OrderPrams.currency,
      name: "Fashion Town",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: OrderPrams.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().

      handler: (response) => {
        console.log(response);
        reset();
        setOrderItems(cart);
        setCart([]);
        setOrderId(orderId);
        setPaymentDetails(response);
        setStatus("paymentSuccessful");
      },
      prefill: {
        name: address.name,
        email: "piyushgarg.dev@gmail.com",
        contact: address.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: config.themeColor,
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", (response) => {
      console.log(response);
    });

    rzp1.open();
  };
  if (data) {
    setPaymentLoader(false);
    handlePayment(data.createRazorPayOrder);
  }
  if (loading) {
    setPaymentLoader(true);
  }
  if (error) {
    setPaymentLoader(false);
    openNotification("Payment server is temporarily down. Please try after some time");
    console.log(error);
  }
  const generateRazorpayOrder = () => {
    setPaymentLoader(true);
    getRazorPayOrder()
  }
  return (
    <>
      <NextButton onClick={generateRazorpayOrder}>CONTINUE</NextButton>
    </>
  );
}

const mapStateToProps = (state) => {
  return { address: state.Cart.address, cart: state.Cart.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPaymentDetails: (paymentDetails) => {
      dispatch(setPaymentDetails(paymentDetails));
    },
    setOrderItems: (orderItems) => {
      dispatch(setOrderItems(orderItems));
    },
    setOrderId: (orderId) => {
      dispatch(setOrderId(orderId));
    },
    setCart: (cart) => {
      dispatch(setCart(cart));
    },
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
    setPaymentLoader: (status) => {
      dispatch(setPaymentLoader(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
