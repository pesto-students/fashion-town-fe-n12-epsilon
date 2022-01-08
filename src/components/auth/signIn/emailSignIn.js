import React, { useState } from "react";
import { Input, Row, Button, Form, message } from "antd";
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { connect } from "react-redux";
message.config({
    top: 100,
    duration: 2,
  });
function EmailSignIn(props) {
  const [signInEmail, setSignInEmail] = useState(null);
  const [signInPassword, setSignInPassword] = useState(null);
  const auth = getAuth();
  const { dispatch } = props;

  const emailSignIn = async () => {
    try {
      await setPersistence(auth, inMemoryPersistence);
      const authResponse = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );

      dispatch({ type: "USER_NAME", payload: authResponse.user.displayName });
    } catch (error) {
      console.log(error.message);
      handleError(error.message);
    }
  };

  const handleError = (errorMessage) => {
    if (errorMessage.includes("wrong-password")) {
      message.error("Invalid Password !");
    } else if (errorMessage.includes("user-not-found")) {
      message.error("Invalid email !");
    } else if (errorMessage.includes("too-many-requests")) {
      message.error("Too many attempts! try after sometime");
    }
  };
  return (
    <Form autoComplete="off" onFinish={emailSignIn}>
      <Row>
        <h2>Login</h2>
      </Row>
      <Row>
        <Form.Item
          style={{ width: "100%" }}
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            size="large"
            placeholder="Email"
            type={"email"}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
        </Form.Item>
      </Row>

      <Row>
        <Form.Item
          style={{ width: "100%" }}
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            type={"password"}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </Form.Item>
      </Row>

      <Row>
        <Form.Item style={{ width: "100%" }}>
          <Button
            htmlType="submit"
            block
            style={{
              background: "#38AF1A",
              borderRadius: "5px",
              color: "white",
            }}
          >
            LOGIN
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

function mapStateToProps(state) {
  return { userName: state.Auth.userName };
}

export default connect(mapStateToProps)(EmailSignIn);
