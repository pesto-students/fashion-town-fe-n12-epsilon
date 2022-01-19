import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Result, Button } from "antd";
import { setStatus } from "../../redux/actions/cartActions";

function PaymentResult(props) {
  const { orderId } = props;
  const navigate = useNavigate();

  const redirectToHome = () => {
    props.setStatus(null);
    navigate("/", { replace: true });
  };
  return (
    <Result
      status="success"
      title="Successfully Purchased !"
      subTitle={`Order number: ${orderId} will be dispatch soon`}
      extra={[
        <Button type="primary" key="console" onClick={redirectToHome}>
          Continue Shopping
        </Button>,
      ]}
    />
  );
}
const mapStateToProps = (state) => {
  return { orderId: state.Order.id };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentResult);
