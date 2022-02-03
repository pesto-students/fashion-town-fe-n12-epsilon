import React from "react";
import { Button, Space } from "antd";
import {
  HeroBanner,
  HeroText,
  ActionButtonContainer,
  CategorySection,
  MenBlock,
  WomenBlock,
  AccessoriesBlock,
  CategoryButtonsWrapper,
  FreshArrivalBlock,
  SectionRow,
  SectionCol,
} from "./landingStyledComponent";
import links from "../../config/routeLinks";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <>
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
            <NavLink to={links.sell}>
              <Button size={"large"} shape="round">
                SELL NOW
              </Button>
            </NavLink>
          </Space>
        </ActionButtonContainer>
      </HeroBanner>

      <CategorySection>
        <SectionRow>
          <SectionCol xs={24} sm={12} md={12} lg={18} xl={18}>
            <MenBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.shop + links.menSection}>
                  <Button size={"large"} shape="round">
                    MEN
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </MenBlock>
          </SectionCol>
          <SectionCol xs={24} sm={12} md={12} lg={6} xl={6}>
            <WomenBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.shop + links.womenSection}>
                  <Button size={"large"} shape="round">
                    WOMEN
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </WomenBlock>
          </SectionCol>
        </SectionRow>
      </CategorySection>

      <CategorySection>
        <SectionRow>
          <SectionCol xs={24} sm={24} md={12} lg={6} xl={6}>
            <FreshArrivalBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.freshArrivals}>
                  <Button size={"large"} shape="round">
                    FRESH ARRIVALS
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </FreshArrivalBlock>
          </SectionCol>
          <SectionCol xs={24} sm={24} md={12} lg={18} xl={18}>
            <AccessoriesBlock>
              <CategoryButtonsWrapper>
                <NavLink to={links.shop + links.accessoriesSection}>
                  <Button size={"large"} shape="round">
                    ACCESSORIES
                  </Button>
                </NavLink>
              </CategoryButtonsWrapper>
            </AccessoriesBlock>
          </SectionCol>
        </SectionRow>
      </CategorySection>
    </>
  );
}

export default LandingPage;
