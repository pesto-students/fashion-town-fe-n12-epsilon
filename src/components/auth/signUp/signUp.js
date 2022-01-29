import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "../../../config/firebase-config";

import { SignUpContainer, SignUpBox, FormItem } from "../authStyledComponent";
import { Input, Row, Form } from "antd";

import { setStoreAuth, setUserName } from "../../../redux/actions/authActions";
import { ActionButton } from "../../globalStyledComponent/globalStyledComponents";

function SignUp({ setUserName, redirectPath, setStoreAuth }) {
  const [registerEmail, setRegisterEmail] = useState(null);
  const [registerPassword, setRegisterPassword] = useState(null);
  const [registerName, setRegisterName] = useState(null);
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      await setPersistence(auth, inMemoryPersistence);
       const authResponse = await createUserWithEmailAndPassword(
         auth,
         registerEmail,
         registerPassword
       );
      console.log(authResponse);
      await addUserNameToProfile(auth.currentUser);
      setUserName(registerName);
      setStoreAuth(authResponse.user);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const addUserNameToProfile = async (user) => {
    try {
      await updateProfile(user, { displayName: registerName });
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
            <FormItem
              name="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                size="large"
                placeholder="Name"
                type={"text"}
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </FormItem>
          </Row>
          <Row>
            <FormItem
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                size="large"
                placeholder="Email"
                type={"email"}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </FormItem>
          </Row>

          <Row>
            <FormItem
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
            </FormItem>
          </Row>

          <Row>
            <FormItem>
              <ActionButton htmlType="submit" block background={"#FF7F3F"}>
                CREATE ACCOUNT
              </ActionButton>
            </FormItem>
          </Row>
        </Form>
      </SignUpBox>
    </SignUpContainer>
  );
}

const mapStateToProps = (state) => {
  return { userName: state.Auth.userName, redirectPath: state.Redirect.path };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => {
      dispatch(setUserName(userName));
    },
    setStoreAuth: (auth) => {
      dispatch(setStoreAuth(auth));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
