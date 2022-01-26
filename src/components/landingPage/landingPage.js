import React from "react";
import { Button, Space, Row, Col } from "antd";
import {
  HeroBanner,
  HeroText,
  ActionButtonContainer,
  MenWomenSection,
  MenBlock,
  WomenBlock,
  AccessoriesSection,
  AccessoriesBlock,
  CategoryButtonsWrapper,
} from "./landingStyledComponent";
import links from "../../config/routeLinks";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <HeroBanner>
        <HeroText>
          ITS TIME TO STAND
          <br /> OUT FROM THE <br />
          CROWED
        </HeroText>
        <ActionButtonContainer>
          <Space size={"large"}>
            <NavLink to={links.shop}>
              <Button size={"large"} shape="round">
                SHOP NOW
              </Button>
            </NavLink>
            {/* <Button size={"large"} shape="round">
              SELL NOW               yet to implement this feature
            </Button> */}
          </Space>
        </ActionButtonContainer>
      </HeroBanner>
      <MenWomenSection>
        <Row style={{ height: "100%" }}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={18}
            xl={18}
            style={{ padding: "5px" }}
          >
            <MenBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.shop + links.menSection}>
                  <Button size={"large"} shape="round">
                    MEN
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </MenBlock>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ padding: "5px" }}>
            <WomenBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.shop + links.womenSection}>
                  <Button size={"large"} shape="round">
                    WOMEN
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </WomenBlock>
          </Col>
        </Row>
      </MenWomenSection>
      <AccessoriesSection>
        <AccessoriesBlock>
          <CategoryButtonsWrapper>
            <NavLink to={links.shop + links.accessoriesSection}>
              <Button size={"large"} shape="round">
                ACCESSORIES
              </Button>
            </NavLink>
          </CategoryButtonsWrapper>
        </AccessoriesBlock>
      </AccessoriesSection>
    </div>
  );
}

export default LandingPage;
