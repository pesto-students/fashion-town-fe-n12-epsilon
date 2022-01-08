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
margin: 10px 0  ;
height: 60vh;
`
const MenBlock = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(#00000096, #00000096),url(${MenBannerImage});
background-position: center;
background-size: cover;
position: relative;
`
const WomenBlock = styled.div`
width: 100%;
height: 100%;
background-image: linear-gradient(#00000096, #00000096),url(${WomenBannerImage});
background-position: center;
background-size: cover;
position: relative;
`

const AccessoriesSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  height: 60vh;
  margin-top: 10px;
  position: relative;
`

const AccessoriesBlock = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#0000001f, #00000096),url(${AccessoriesBannerImage});
  background-position: center;
  background-size: cover;
  margin:0 5px;
  position: relative;
`
const CategoryButtonsWrapper = styled.div`
  position: absolute;
  top:90%;
  left:50%;
  transform: translate(-50%,-50%);
`
const HorizontalLine = styled.div`
    border: 1px solid #CACACA;
    width: 100%;
    height: 0px;
`;

export { HeroBanner, HeroText, ActionButtonContainer, MenWomenSection, MenBlock,WomenBlock,AccessoriesSection,AccessoriesBlock ,CategoryButtonsWrapper};
