import React from 'react'
import { Steps } from 'antd';
import { connect } from 'react-redux';
import { CheckOutStepsWrapper } from "./cartStyledComponent";
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

function mapStateToProps(state) {
  return { step: state.Cart.step};
}

export default connect(mapStateToProps)(CheckOutSteps);

