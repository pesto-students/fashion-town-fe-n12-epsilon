import React, { useEffect } from "react";
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
import { setStatus } from "../../redux/actions/cartActions";
import openNotification from "components/notification/messageNotification";

function Payment(props) {
  const {
    address,
    cart,
    setOrderItems,
    setOrderId,
    setPaymentDetails,
    setStatus,
    calculateTotalMRP,
    setPaymentLoader,
  } = props;

  const Razorpay = useRazorpay();

  const amount = parseInt(Math.floor(calculateTotalMRP()) + "00");
  const orderId = "P" + moment().format("YYYYMMDDHHmmss");

  const [getRazorPayOrder, { error, data, reset }] = useMutation(
    RAZORPAY_ORDER_QUERY,
    {
      variables: { amount: amount, orderId: orderId },
    }
  );

  const handlePayment = async ({ amount_due, currency, id }) => {
    const options = {
      key: process.env.REACT_APP_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "Fashion Town",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().

      handler: (response) => {
        console.log(response);
        reset();
        setOrderItems(cart);
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
      openNotification("Payment failed");
      console.log(response);
    });

    rzp1.open();
  };

  useEffect(() => {
    if (data) {
      setPaymentLoader(false);
      handlePayment(data.createRazorPayOrder);
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (error) {
      setPaymentLoader(false);
      openNotification(
        "Payment server is temporarily down. Please try after some time"
      );
      console.log(error);
    }
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  const generateRazorpayOrder = () => {
    setPaymentLoader(true);
    getRazorPayOrder();
  };
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
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
    setPaymentLoader: (status) => {
      dispatch(setPaymentLoader(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
