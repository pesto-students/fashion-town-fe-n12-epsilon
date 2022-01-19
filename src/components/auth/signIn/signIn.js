import React from "react";
import {
  SignInContainer,
  SignInBox,
  HorizontalLine,
} from "./signInStyledComponent";

import { Row,Space} from "antd";
import EmailSignIn from "./emailSignIn";
import { SocialSignIn } from "./socialSignIn";



function SignIn() {
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



export default SignIn;
