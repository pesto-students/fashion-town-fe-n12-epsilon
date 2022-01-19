import React from 'react'
import { Steps } from 'antd';
import { connect } from 'react-redux';
import { CheckOutStepsWrapper } from "./checkoutStyledComponent";
const { Step } = Steps;

function CheckOutSteps(props) {
  const {step} = props
    return (
        <CheckOutStepsWrapper current={step}>
        <Step title="BAG"  />
        <Step title="ADDRESS" />
        <Step title="PAYMENT"/>
      </CheckOutStepsWrapper>
    )
}

const mapStateToProps = (state) => {
  return { step: state.Cart.step};
}

export default connect(mapStateToProps)(CheckOutSteps);

