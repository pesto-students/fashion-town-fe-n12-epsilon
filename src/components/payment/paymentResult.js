import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Result, Button } from "antd";
import { setStatus } from "../../redux/actions/cartActions";
import links from "../../config/routeLinks";

function PaymentResult({ setStatus, orderId }) {
  const navigate = useNavigate();

  const redirectToHome = () => {
    setStatus(null);
    navigate(links.home, { replace: true });
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
const mapStateToProps = ({ Order }) => {
  return { orderId: Order.id };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentResult);
