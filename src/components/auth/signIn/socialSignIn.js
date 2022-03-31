import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { googleAuthProvider } from "config/authMethods";

import {
  getAuth,
  signInWithPopup,
  setPersistence,
  inMemoryPersistence,
} from "firebase/auth";

import { Row, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

import { FullWidthSpace, IconHolder, SocialRow } from "components/auth/authStyledComponent";
import {
  setAuthLoader,
  setStoreAuth,
  setUserName,
} from "redux/actions/authActions";
import { ActionButton } from "components/globalStyledComponent";
import links from "config/routeLinks";
import openNotification from "components/notification/messageNotification";

function SocialSignIn({
  redirectPath,
  setUserName,
  setStoreAuth,
  setAuthLoader,
}) {
  const navigate = useNavigate();

  const handleSocialAuth = async (provider) => {
    const auth = getAuth();
    try {
      await setPersistence(auth, inMemoryPersistence);
      setAuthLoader(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserName(user.displayName);
      setStoreAuth(user);
      setAuthLoader(false);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      setAuthLoader(false);
      console.log(error);
      openNotification("Error occurred");
    }
  };

  return (
    <FullWidthSpace direction="vertical" size={"large"}>
      <SocialRow>
        <IconHolder>
          <GoogleOutlined />
        </IconHolder>
        <Button onClick={() => handleSocialAuth(googleAuthProvider)} block>
          Sign in with Google
        </Button>
      </SocialRow>

      {/* <SocialRow>
        <IconHolder>
          <FacebookFilled />
        </IconHolder>
        <Button block onClick={() => handleSocialAuth(facebookAuthProvider)}>   To be implemented in phase 2
          Log in with Facebook
        </Button>
      </SocialRow> */}

      <Row>
        <ActionButton background={"#FF7F3F"} block>
          <Link to={`/${links.signUp}`}>CREATE ACCOUNT</Link>
        </ActionButton>
      </Row>
    </FullWidthSpace>
  );
}

const mapStateToProps = ({ Redirect }) => {
  return { redirectPath: Redirect.path };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => {
      dispatch(setUserName(userName));
    },
    setStoreAuth: (auth) => {
      dispatch(setStoreAuth(auth));
    },
    setAuthLoader: (status) => {
      dispatch(setAuthLoader(status));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SocialSignIn);
