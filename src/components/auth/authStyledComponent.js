import styled from "styled-components";
import { Form, Row, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const DisplayText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  color: black;
`;
const NameInitialBox = styled.div`
  border: 2px solid black;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNameCapitalize = styled.p`
  text-transform: capitalize;
  color: black;
  cursor: initial;
`;

const AuthContainer = styled.div`
  height: 90vh;
  width: 100%;
  background: #ff7878; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f9575782, #e9e7e7);
  background: linear-gradient(to right, #f9575782, #e9e7e7);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpBox = styled.div`
  height: 90%;
  width: 20%;
  width: 391px;
  height: 387px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  border-radius: 10px;
`;

const SignInBox = styled.div`
  height: 65%;
  width: 20%;
  min-width: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2%;
  position: relative;
  border-radius: 10px;
`;
const HorizontalLine = styled.div`
  border: 1px solid #cacaca;
  width: 100%;
  height: 0px;
`;

const AuthButtons = styled.div`
  border: 1px solid #9c9c9c;
`;
const IconHolder = styled.div`
  position: absolute;
  left: 12%;
  z-index: 10;
  top: 16%;
  font-size: 1.2em;
`;
const ErrorMsg = styled.p`
  color: red;
  position: absolute;
`;

const FormItem = styled(Form.Item)`
  width: 100%;
`;

const FullWidthSpace = styled(Space)`
  width: 100%;
`;

const AuthHeaderWrapper = styled.div`
  width: 45;
`;
const SocialRow = styled(Row)`
  position: relative;
`;

const LoadingIcon = styled(LoadingOutlined)`
  font-size: 50px;
`;

export {
  DisplayText,
  NameInitialBox,
  UserNameCapitalize,
  AuthContainer,
  SignInBox,
  HorizontalLine,
  AuthButtons,
  IconHolder,
  ErrorMsg,
  FormItem,
  FullWidthSpace,
  SignUpBox,
  AuthHeaderWrapper,
  SocialRow,
  LoadingIcon,
};
