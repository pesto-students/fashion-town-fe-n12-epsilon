import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Row, Col, Space, Input, Drawer } from "antd";

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
  BottomFilterBox,
} from "./footerStyledComponent";
import links from "../../config/routeLinks";
import Text from "antd/lib/typography/Text";
import { FilterOutlined } from "@ant-design/icons";
import Filter from "../productListing/filter";

function Footer() {
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  const { shop } = links

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Col xs={0} sm={24} md={24} lg={24} xl={24}>
        <FooterContainer>
          <Row>
            <Col xs={0} sm={0} md={6} lg={6} align="center">
              <Space direction="vertical" size={"large"} align="start">
                <NavLink to={links.shop + links.menSection}>
                  <QuickLinksText>MEN</QuickLinksText>
                </NavLink>
                <NavLink to={links.shop + links.womenSection}>
                  <QuickLinksText>WOMEN</QuickLinksText>
                </NavLink>
                <NavLink to={links.shop + links.accessoriesSection}>
                  <QuickLinksText>ACCESSORIES</QuickLinksText>
                </NavLink>
                {/* <QuickLinksText>ADMIN</QuickLinksText>  yet to implement this feature*/}
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
      </Col>
      {pathname === `/${shop}` && (
        <Col xs={24} sm={0} md={0} lg={0} xl={0}>
          <BottomFilterBox onClick={showDrawer}>
            <Space>
              <FilterOutlined />
              <Text>FILTERS</Text>
            </Space>
          </BottomFilterBox>
        </Col>
      )}
      <Drawer
        title="FILTERS"
        placement="bottom"
        onClose={onClose}
        visible={visible}
        height={"100%"}
      >
        <Filter />
      </Drawer>
    </>
  );
}

export default Footer;
