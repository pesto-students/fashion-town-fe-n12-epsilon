import React, { useState } from "react";

import { connect } from "react-redux";

import { Card, Input, Typography, Row, Col, Form, Button, Modal } from "antd";
import { NextButton } from "./cartStyledComponent";
const { Text } = Typography;

function AddressFormPopUp(props) {
  const {dispatch} = props

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch({ type: "ADDRESS", payload: values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
    dispatch({ type: "STEP", payload: 1 });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NextButton block onClick={showModal}>
        PROCEED
      </NextButton>

      <Modal
        title="DELIVERY ADDRESS"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
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
            name="password"
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
            <NextButton htmlType="submit">DONE</NextButton>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default connect(null, null)(AddressFormPopUp);
