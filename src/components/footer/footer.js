import React from "react";
import { Row, Col, Space, Input } from "antd";

import {
  FooterContainer,
  QuickLinksText,
  HorizontalLine,
  SocialMediaHandleWrapper,
  SubscribeButton,
  InstaGramIcon,
  FacebookIcon,
  TwitterIcon,
  SocialMediaHandleCol,
} from "./footerStyledComponent";

function Footer() {
  return (
    <FooterContainer>
      <Row>
        <Col xs={0} sm={0} md={6} lg={6} align="center">
          <Space direction="vertical" size={"large"} align="start">
            <QuickLinksText>MEN</QuickLinksText>
            <QuickLinksText>WOMEN</QuickLinksText>
            <QuickLinksText>ACCESSORIES</QuickLinksText>
            <QuickLinksText>ADMIN</QuickLinksText>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} align="center">
          <Space direction="vertical" size={"large"}>
            <QuickLinksText>
              Receive exclusive promotions, private sales and news
            </QuickLinksText>
            <QuickLinksText>
              <Input placeholder="Enter your e-mail" bordered={false} />
              <HorizontalLine />
            </QuickLinksText>
            <QuickLinksText>
              <SubscribeButton size={"large"} shape="round">
                Subscribe
              </SubscribeButton>
            </QuickLinksText>
          </Space>
        </Col>
        <SocialMediaHandleCol xs={24} sm={24} md={6} lg={6}>
          <SocialMediaHandleWrapper>
            <Space size={"large"} align="center">
              <InstaGramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Space>
          </SocialMediaHandleWrapper>
        </SocialMediaHandleCol>
      </Row>
    </FooterContainer>
  );
}

export default Footer;
