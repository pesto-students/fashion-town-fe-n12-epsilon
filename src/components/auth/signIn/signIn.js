import React from "react";
import {
  SignInContainer,
  SignInBox,
  HorizontalLine,
} from "./signInStyledComponent";

import { Row,Space} from "antd";
import { connect } from "react-redux";
import EmailSignIn from "./emailSignIn";
import { SocialSignIn } from "./socialSignIn";



function SignIn(props) {
  return (
    <SignInContainer>
      <SignInBox>
        <EmailSignIn />
        <Space direction="vertical" size={"large"} style={{ width: "100%" }}>
          <Row>
            <HorizontalLine></HorizontalLine>
          </Row>
            <SocialSignIn/>
        </Space>
      </SignInBox>
    </SignInContainer>
  );
}

function mapStateToProps(state) {
  return { userName: state.Auth.userName };
}

export default connect(mapStateToProps)(SignIn);
