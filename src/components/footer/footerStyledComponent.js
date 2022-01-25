import { Button, Col } from "antd";
import styled from "styled-components";
import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";

const FooterContainer = styled.section`
  height: 20vh;
  margin: 5px;
  padding: 2%;
  border-top: 1px solid black;
`;
const QuickLinksText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
`;

const HorizontalLine = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 0px;
`;
const SocialMediaHandleWrapper = styled.div`
  top: 20%;
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SubscribeButton = styled(Button)`
  background: black;
  color: white;
  margin-bottom: 10px;
`;
const InstaGramIcon = styled(InstagramOutlined)`
  font-size: 3em;
`;
const FacebookIcon = styled(FacebookFilled)`
  font-size: 3em;
`;
const TwitterIcon = styled(TwitterOutlined)`
  font-size: 3em;
`;
const SocialMediaHandleCol = styled(Col)`
position: relative;
margin-top: 10px;
`

const BottomFilterBox = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background: white;
  border-radius: 5px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-top: 10px;
  font-size: 1.2em;
  cursor: pointer;
`;
export {
  FooterContainer,
  QuickLinksText,
  HorizontalLine,
  SocialMediaHandleWrapper,
  SubscribeButton,
  InstaGramIcon,
  FacebookIcon,
  TwitterIcon,
  SocialMediaHandleCol,
  BottomFilterBox,
};
