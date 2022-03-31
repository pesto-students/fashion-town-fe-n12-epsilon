import React from "react";
import { connect } from "react-redux";
import { Card, Input, Form } from "antd";
import { NextButton } from "components/address/addressStyledComponent";
import { setAddress, setStatus } from "redux/actions/cartActions";

function AddressForm({ setAddress, setStatus, userName }) {

  const onFinish = (address) => {
    setAddress(address);
    setStatus("payment");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const autoFillAddressHandler = () => {
    const address = {
      name: "Guest User",
      phone: "+91 9865329865",
      street: "#57 7th cross",
      city: "Bengaluru",
      State: "Karnataka",
      pin: "560098"
    };
     setAddress(address);
     setStatus("payment");
  }

  return (
    <Card title="DELIVERY ADDRESS">
      <Form
        name="basic"
        size="large"
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone",
            },
          ]}
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <Form.Item
          name="street"
          rules={[
            {
              required: true,
              message: "Please input your Flat No. and Street",
            },
          ]}
        >
          <Input placeholder="Flat No. and Street" />
        </Form.Item>
        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your city",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="state"
          rules={[
            {
              required: true,
              message: "Please input your State",
            },
          ]}
        >
          <Input placeholder="State" />
        </Form.Item>
        <Form.Item
          name="pin"
          rules={[
            {
              required: true,
              message: "Please input your PIN code",
            },
          ]}
        >
          <Input placeholder="PIN code" />
        </Form.Item>
        {userName === "Guest User" && (
          <Form.Item>
            <NextButton onClick={autoFillAddressHandler}>
              AUTO FILL ADDRESS AND CONTINUE
            </NextButton>
          </Form.Item>
        )}
        {userName !== "Guest User" && (
          <Form.Item>
            <NextButton htmlType="submit">CONTINUE</NextButton>
          </Form.Item>
        )}
      </Form>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return { userName: state.Auth.userName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (status) => {
      dispatch(setStatus(status));
    },
    setAddress: (address) => {
      dispatch(setAddress(address));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
