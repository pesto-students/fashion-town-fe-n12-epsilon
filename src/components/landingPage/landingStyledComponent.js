import styled from "styled-components";
import HeroBannerImage from "../../assets/images/hero-banner.jpg";
import MenBannerImage from "../../assets/images/men.jpg"
import WomenBannerImage from "../../assets/images/women.jpg"
import AccessoriesBannerImage from "../../assets/images/accessories.jpg"
const HeroBanner = styled.section`
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(#0000001f, #0000001f),url(${HeroBannerImage});
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

const MenWomenSection = styled.section`
display: flex;
flex-wrap: nowrap;
height: 60vh;
`
const MenBlock = styled.div`
width: 70%;
height: 100%;
margin:10px;
margin-right: 0;
background-image: linear-gradient(#00000096, #00000096),url(${MenBannerImage});
background-position: center;
background-size: cover;
`
const WomenBlock = styled.div`
width: 30%;
height: 100%;
margin:10px;
background-image: linear-gradient(#00000096, #00000096),url(${WomenBannerImage});
background-position: center;
background-size: cover;
`

const AccessoriesSection = styled.section`
   height: 60vh;
  width: 100%;
  background-image: linear-gradient(#0000001f, #0000001f),url(${AccessoriesBannerImage});
  background-position: center;
  background-size: cover;
  margin:10px;
`

export { HeroBanner, HeroText, ActionButtonContainer, MenWomenSection, MenBlock,WomenBlock,AccessoriesSection };
