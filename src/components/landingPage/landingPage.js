import React, { Component } from "react";
import { Button, Space } from "antd";
import {
  HeroBanner,
  HeroText,
  ActionButtonContainer,
  MenWomenSection,
  MenBlock,
  WomenBlock,
  AccessoriesSection,
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
          <MenBlock></MenBlock>
          <WomenBlock></WomenBlock>
        </MenWomenSection>
        <AccessoriesSection></AccessoriesSection>
      </div>
    );
  }
}

export default landingPage;
