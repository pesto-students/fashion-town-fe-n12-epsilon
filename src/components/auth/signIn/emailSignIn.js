import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { setStoreAuth, setUserName } from "../../../redux/actions/authActions";

import { Input, Row, Form, message } from "antd";
import { FormItem } from "../authStyledComponent";
import { ActionButton } from "../../globalStyledComponent/globalStyledComponents";
message.config({
  top: 100,
  right: 50,
  duration: 2,
});

function EmailSignIn(props) {
  const [signInEmail, setSignInEmail] = useState(null);
  const [signInPassword, setSignInPassword] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();
  const { redirectPath } = props;

  const emailSignIn = async () => {
    try {
      await setPersistence(auth, inMemoryPersistence);
      const authResponse = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      props.setUserName(authResponse.user.displayName);
      props.setStoreAuth(authResponse.user);
      navigate(redirectPath, { replace: true });
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
        <FormItem
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input
            size="large"
            placeholder="Email"
            type={"email"}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
        </FormItem>
      </Row>

      <Row>
        <FormItem
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            type={"password"}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </FormItem>
      </Row>

      <Row>
        <FormItem>
          <ActionButton htmlType="submit" block background={"#38AF1A"}>
            LOGIN
          </ActionButton>
        </FormItem>
      </Row>
    </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(EmailSignIn);
