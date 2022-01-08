import React, { Component } from "react";
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
  HorizontalLine,
} from "./landingStyledComponent";

export class landingPage extends Component {
  render() {
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
              <Button size={"large"} shape="round">
                BUY NOW
              </Button>
              <Button size={"large"} shape="round">
                SELL NOW
              </Button>
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
                  <Button size={"large"} shape="round">
                    MEN
                  </Button>
                </CategoryButtonsWrapper>
              </MenBlock>
            </Col>
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              style={{ padding: "5px" }}
            >
              <WomenBlock>
                <CategoryButtonsWrapper>
                  <Button size={"large"} shape="round">
                    WOMEN
                  </Button>
                </CategoryButtonsWrapper>
              </WomenBlock>
            </Col>
          </Row>
        </MenWomenSection>
        <AccessoriesSection>
          <AccessoriesBlock>
            <CategoryButtonsWrapper>
              <Button size={"large"} shape="round">
                ACCESSORIES
              </Button>
            </CategoryButtonsWrapper>
          </AccessoriesBlock>
        </AccessoriesSection>
      </div>
    );
  }
}

export default landingPage;
