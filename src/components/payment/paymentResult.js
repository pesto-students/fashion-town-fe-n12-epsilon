import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function PaymentResult(props) {
  const { orderId } = props;
  return (
    <Result
      status="success"
      title="Successfully Purchased !"
      subTitle={`Order number: ${orderId} will be dispatch soon`}
      extra={[
        <Link to={"/"}>
          <Button type="primary" key="console">
            Buy Again
          </Button>
        </Link>,
      ]}
    />
  );
}
function mapStateToProps(state) {
  return { orderId: state.Order.id };
}

export default connect(mapStateToProps)(PaymentResult);
