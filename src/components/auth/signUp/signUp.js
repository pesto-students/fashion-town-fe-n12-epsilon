import React, { useState } from "react";
import { connect } from "react-redux";

import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "../../../config/firebase-config";

import { SignUpContainer, SignUpBox } from "./signUpStyledComponent";
import { Input, Row, Button, Form } from "antd";

import { setUserName } from "../../../redux/actions/authActions";

function SignUp(props) {
  const [registerEmail, setRegisterEmail] = useState(null);
  const [registerPassword, setRegisterPassword] = useState(null);
  const [registerName, setRegisterName] = useState(null);

  const registerUser = async () => {
    try {
      await setPersistence(auth, inMemoryPersistence);
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await addUserNameToProfile(auth.currentUser);
      props.setUserName(registerName);
    } catch (error) {
      console.log(error);
    }
  };

  const addUserNameToProfile = async (user) => {
    try {
      await updateProfile(user, { displayName: registerName });
      console.log("user name added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpBox>
        <Form autoComplete="off" onFinish={registerUser}>
          <Row>
            <h2>Signup</h2>
          </Row>

          <Row>
            <Form.Item
              style={{ width: "100%" }}
              name="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                size="large"
                placeholder="Name"
                type={"text"}
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </Form.Item>
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
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </Form.Item>
          </Row>

          <Row>
            <Form.Item
              style={{ width: "100%" }}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                type={"password"}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </Form.Item>
          </Row>

          <Row>
            <Form.Item style={{ width: "100%" }}>
              <Button
                htmlType="submit"
                block
                style={{
                  background: "#FF7F3F",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                CREATE ACCOUNT
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </SignUpBox>
    </SignUpContainer>
  );
}

const mapStateToProps = (state) => {
  return { userName: state.Auth.userName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => {
      dispatch(setUserName(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
