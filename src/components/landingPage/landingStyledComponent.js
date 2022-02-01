import styled from "styled-components";
import HeroBannerImage from "../../assets/images/hero-banner.jpg";
import MenBannerImage from "../../assets/images/men.jpg";
import WomenBannerImage from "../../assets/images/women.jpg";
import AccessoriesBannerImage from "../../assets/images/accessories.jpg";
import FreshArrival from "../../assets/images/freshArrivals.jpg";
import { Col, Row } from "antd";
const HeroBanner = styled.section`
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(#0000001f, #0000001f),
    url(${HeroBannerImage});
  background-position: center;
  position: relative;
  background-size: cover;
`;

const HeroText = styled.div`
  position: absolute;
  top: 20%;
  left: 8%;
  font-size: 3.5em;
  color: white;
`;

const ActionButtonContainer = styled.div`
  position: absolute;
  top: 70%;
  left: 8%;
`;

const CategorySection = styled.section`
  margin: 10px 0;
  height: 60vh;
`;
const CategoryBlock = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const MenBlock = styled(CategoryBlock)`
  background-image: linear-gradient(#00000096, #00000096),
    url(${MenBannerImage});
`;
const WomenBlock = styled(CategoryBlock)`
  background-image: linear-gradient(#00000096, #00000096),
    url(${WomenBannerImage});
`;

const AccessoriesBlock = styled(CategoryBlock)`
  background-image: linear-gradient(#0000001f, #00000096),
    url(${AccessoriesBannerImage});
`;

const FreshArrivalBlock = styled(CategoryBlock)`
  background-image: linear-gradient(#0000001f, #00000096), url(${FreshArrival});
`;

const CategoryButtonsWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SectionRow = styled(Row)`
  height: 100%;
`;
const SectionCol = styled(Col)`
  padding: 5px;
`;

export {
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
};
