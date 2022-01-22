import React from "react";
import {
  SignInContainer,
  SignInBox,
  HorizontalLine,
  FullWidthSpace,
} from "../authStyledComponent";

import { Row } from "antd";
import EmailSignIn from "./emailSignIn";
import SocialSignIn from "./socialSignIn";

function SignIn() {
  return (
    <SignInContainer>
      <SignInBox>
        <EmailSignIn />
        <FullWidthSpace direction="vertical" size={"large"}>
          <Row>
            <HorizontalLine></HorizontalLine>
          </Row>
          <SocialSignIn />
        </FullWidthSpace>
      </SignInBox>
    </SignInContainer>
  );
}

export default SignIn;
