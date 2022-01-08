import React from "react";
import { Row, Col, Space, Button, Input } from "antd";
import {
  InstagramOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  FooterContainer,
  QuickLinksText,
  HorizontalLine,
  SocialMediaHandleWrapper,
} from "./footerStyledComponent";

function Footer() {
  return (
    <FooterContainer>
      <Row>
        <Col  xs={0} sm={0} md={6} lg={6} align="center">
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
              <Button
                size={"large"}
                shape="round"
                style={{ background: "black", color: "white" }}
              >
                Subscribe
              </Button>
            </QuickLinksText>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} style={{ position: "relative" }}>
          <SocialMediaHandleWrapper >
            <Space size={"large"} align="center">
              <InstagramOutlined style={{ fontSize: "3em" }} />
              <FacebookFilled style={{ fontSize: "3em" }} />
              <TwitterOutlined style={{ fontSize: "3em" }} />
            </Space>
          </SocialMediaHandleWrapper>
        </Col>
      </Row>
    </FooterContainer>
  );
}

export default Footer;
