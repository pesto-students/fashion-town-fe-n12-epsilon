import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  googleAuthProvider,
  facebookAuthProvider,
} from "../../../config/authMethods";

import {
  getAuth,
  signInWithPopup,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { Row, Button, Space } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";

import { IconHolder } from "./signInStyledComponent";
import { setStoreAuth, setUserName } from "../../../redux/actions/authActions";

export const SocialSignIn = (props) => {
  const navigate = useNavigate();
  const { redirectPath } = props;

  const handleSocialAuth = async (provider) => {
    const auth = getAuth();
    try {
      await setPersistence(auth, inMemoryPersistence);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      props.setUserName(user.displayName);
      props.setStoreAuth(user);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
      <Row style={{ position: "relative" }}>
        <IconHolder>
          <GoogleOutlined />
        </IconHolder>
        <Button onClick={() => handleSocialAuth(googleAuthProvider)} block>
          Sign in with Google
        </Button>
      </Row>

      <Row style={{ position: "relative" }}>
        <IconHolder>
          <FacebookFilled />
        </IconHolder>
        <Button block onClick={() => handleSocialAuth(facebookAuthProvider)}>
          Log in with Facebook
        </Button>
      </Row>

      <Row>
        <Button
          block
          style={{
            background: "#FF7F3F",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <Link to={`/signUp`}>CREATE ACCOUNT</Link>
        </Button>
      </Row>
      <Row>
        <Button
          block
          style={{
            background: "grey",
            borderRadius: "5px",
            color: "white",
          }}
        >
          GUEST LOGIN
        </Button>
      </Row>
    </Space>
  );
};

const mapStateToProps = (state) => {
  return { redirectPath: state.Redirect.path };
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
export default connect(mapStateToProps, mapDispatchToProps)(SocialSignIn);
