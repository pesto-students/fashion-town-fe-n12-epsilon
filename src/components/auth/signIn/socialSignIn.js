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

import { Row, Button } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";

import { FullWidthSpace, IconHolder } from "../authStyledComponent";
import { setStoreAuth, setUserName } from "../../../redux/actions/authActions";
import { ActionButton } from "../../globalStyledComponent/globalStyledComponents";
import links from "../../../config/routeLinks";

function SocialSignIn({ redirectPath, setUserName, setStoreAuth }) {
  const navigate = useNavigate();

  const handleSocialAuth = async (provider) => {
    const auth = getAuth();
    try {
      await setPersistence(auth, inMemoryPersistence);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserName(user.displayName);
      setStoreAuth(user);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FullWidthSpace direction="vertical" size={"large"}>
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
        <ActionButton background={"#FF7F3F"} block>
          <Link to={`/${links.signUp}`}>CREATE ACCOUNT</Link>
        </ActionButton>
      </Row>
      <Row>
        <ActionButton block background={"#808080"}>
          GUEST LOGIN
        </ActionButton>
      </Row>
    </FullWidthSpace>
  );
}

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
