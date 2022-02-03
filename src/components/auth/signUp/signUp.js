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

import {
  AuthContainer,
  SignUpBox,
  FormItem,
  LoadingIcon,
} from "../authStyledComponent";
import { Input, Row, Form, Spin } from "antd";

import { setStoreAuth, setUserName } from "../../../redux/actions/authActions";
import { ActionButton } from "../../globalStyledComponent/globalStyledComponents";
import openNotification from "components/notification/messageNotification";

function SignUp({ setUserName, redirectPath, setStoreAuth }) {
  const [registerEmail, setRegisterEmail] = useState(null);
  const [registerPassword, setRegisterPassword] = useState(null);
  const [registerName, setRegisterName] = useState(null);
  const [authLoader, setAuthLoader] = useState(false);
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      setAuthLoader(true);
      await setPersistence(auth, inMemoryPersistence);
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      await addUserNameToProfile(auth.currentUser);
      setUserName(registerName);
      setStoreAuth(authResponse.user);
      setAuthLoader(false);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
      setAuthLoader(false);
      handleError(error);
    }
  };
  const extractErrorMessage = (error) => {
    return error.message.split("/")[1].replaceAll("-", " ").replace(")", "");
  };
  const handleError = (error) => {
    const message = extractErrorMessage(error);
    openNotification(message);
  };

  const addUserNameToProfile = async (user) => {
    try {
      await updateProfile(user, { displayName: registerName });
    } catch (error) {
      console.log(error);
    }
  };

  const antIcon = <LoadingIcon spin />;
  return (
    <>
      <Spin indicator={antIcon} spinning={authLoader}>
        <AuthContainer>
          <SignUpBox>
            <Form autoComplete="off" onFinish={registerUser}>
              <Row>
                <h2>Signup</h2>
              </Row>

              <Row>
                <FormItem
                  name="Name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
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
                  rules={[
                    { required: true, message: "Please enter your email!" },
                  ]}
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
        </AuthContainer>
      </Spin>
    </>
  );
}

const mapStateToProps = ({ Auth, Redirect }) => {
  return { userName: Auth.userName, redirectPath: Redirect.path };
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
