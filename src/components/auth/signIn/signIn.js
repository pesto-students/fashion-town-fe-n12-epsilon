import React from "react";
import { connect } from "react-redux";
import {
  AuthContainer,
  SignInBox,
  HorizontalLine,
  FullWidthSpace,
  LoadingIcon,
} from "../authStyledComponent";

import { Row, Spin } from "antd";
import EmailSignIn from "./emailSignIn";
import SocialSignIn from "./socialSignIn";

function SignIn({ authLoader }) {
  const antIcon = <LoadingIcon spin />;
  return (
    <>
      <Spin indicator={antIcon} spinning={authLoader}>
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
      </Spin>
    </>
  );
}
const mapStateToProps = ({ Auth }) => {
  return { authLoader: Auth.authLoader };
};
export default connect(mapStateToProps)(SignIn);
