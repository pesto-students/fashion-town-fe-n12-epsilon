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

  const stepsArray = ["BAG", "ADDRESS", "PAYMENT"];
  return (
    <CheckOutStepsWrapper current={stepsMap[status]}>
      {stepsArray.map((step, index) => (
        <Step title={step} key={index} />
      ))}
    </CheckOutStepsWrapper>
  );
}

const mapStateToProps = ({ Cart }) => {
  return { status: Cart.status };
};

export default connect(mapStateToProps)(CheckOutSteps);
