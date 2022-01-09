import styled from "styled-components"

const FooterContainer = styled.section`
    height: 20vh;
    margin: 5px;
    padding: 2%;
    border-top: 1px solid black;
`
const QuickLinksText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
`

const HorizontalLine = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 0px;
`;
const SocialMediaHandleWrapper = styled.div`
  top: 20%;
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
`;
export {FooterContainer,QuickLinksText,HorizontalLine,SocialMediaHandleWrapper}