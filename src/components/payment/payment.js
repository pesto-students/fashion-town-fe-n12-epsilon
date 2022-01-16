import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { RAZORPAY_ORDER_QUERY } from "../../graphQlQueries/razorPayOdrer";
import moment from "moment";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import config from "../../config/config";
import { NextButton } from "../cart/cartStyledComponent";
import { connect } from "react-redux";

function Payment(props) {
  const {dispatch,address} = props
  const Razorpay = useRazorpay();
  const amount = parseInt(Math.floor(props.calculateTotalMRP()) + "00");
  const orderId = "P" + moment().format("YYYYMMDDHHmmss");

  const handlePayment = async (OrderPrams) => {
    const options = {
      key: "rzp_test_QufTPfjwjSmSGC", // Enter the Key ID generated from the Dashboard
      amount: OrderPrams.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: OrderPrams.currency,
      name: "Fashion Town",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: OrderPrams.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        console.log(response)
        dispatch({ type: "CART", payload: [] });
        dispatch({ type: "STEP", payload: 3 });
        dispatch({ type: "ORDER_ID", payload: orderId });
        dispatch({ type: "PAYMENT_DETAILS", payload: response });
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
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

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };
  const [getRazorPayOrder, { error, loading, data }] = useMutation(
    RAZORPAY_ORDER_QUERY,
    {
      variables: { amount: amount, orderId: orderId },
    }
  );
  if (data) {
    console.log(data.createRazorPayOrder);
    handlePayment(data.createRazorPayOrder);
  }

  return (
    <NextButton onClick={getRazorPayOrder}>CONTINUE</NextButton>
  )
}
function mapStateToProps(state) {
  return { address: state.Cart.address };
}

export default connect(mapStateToProps)(Payment);
