import React from "react";
import { Steps } from "antd";
import { connect } from "react-redux";
import { CheckOutStepsWrapper } from "./checkoutStyledComponent";
const { Step } = Steps;

function CheckOutSteps({ status }) {
  const stepsMap = {
    bag: 0,
    address: 1,
    payment: 2,
    paymentSuccessful: 3,
    orderPlaced: 4,
  };
  return (
    <CheckOutStepsWrapper current={stepsMap[status]}>
      <Step title="BAG" />
      <Step title="ADDRESS" />
      <Step title="PAYMENT" />
    </CheckOutStepsWrapper>
  );
}

const mapStateToProps = (state) => {
  return { status: state.Cart.status };
};

export default connect(mapStateToProps)(CheckOutSteps);
