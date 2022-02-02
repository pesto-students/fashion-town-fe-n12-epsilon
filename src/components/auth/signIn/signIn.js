import React from "react";
import {
  AuthContainer,
  SignInBox,
  HorizontalLine,
  FullWidthSpace,
} from "../authStyledComponent";

import { Row } from "antd";
import EmailSignIn from "./emailSignIn";
import SocialSignIn from "./socialSignIn";

function SignIn() {
  return (
    <AuthContainer>
      <SignInBox>
        <EmailSignIn />
        <FullWidthSpace direction="vertical" size={"large"}>
          <Row>
            <HorizontalLine></HorizontalLine>
          </Row>
          <SocialSignIn />
        </FullWidthSpace>
      </SignInBox>
    </AuthContainer>
  );
}

export default SignIn;
