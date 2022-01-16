import React from "react";
import { connect } from "react-redux";

import { Card, Input, Typography, Row, Col, Form, Button, Modal } from "antd";
import { NextButton } from "./cartStyledComponent";
const { Text } = Typography;

function AddressForm(props) {
  const { dispatch } = props;

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({ type: "ADDRESS", payload: values });
    dispatch({ type: "STEP", payload: 2 });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
      <Card title="DELIVERY ADDRESS" >
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
            message: "Please input your name!",
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

      <Form.Item>
          {/* <Payment calculateTotalMRP={calculateTotalMRP} /> */}
        <NextButton htmlType="submit">CONTINUE</NextButton>
      </Form.Item>
    </Form>
    </Card>
  );
}
export default connect(null, null)(AddressForm);
