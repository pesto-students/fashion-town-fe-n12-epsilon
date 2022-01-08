import styled from "styled-components";

const SignInContainer = styled.div`
    height: 90vh;
    width: 100%;
    background: #ff7878;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f9575782, #e9e7e7); 
    background: linear-gradient(to right, #f9575782, #e9e7e7);
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignInBox = styled.div`
    height: 90%;
    width: 20%;
    width: 391px;
    height: 565px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2%;
    position: relative;
`;
const HorizontalLine = styled.div`
    border: 1px solid #CACACA;
    width: 100%;
    height: 0px;
`;

const AuthButtons = styled.div`
  border: 1px solid #9c9c9c;
`;
const IconHolder = styled.div`
  position: absolute;
  left: 12%;
  z-index: 10;
  top: 16%;
  font-size: 1.2em;
`;
const ErrorMsg = styled.p`
  color: red;
  position: absolute;
`
export { SignInContainer, SignInBox, HorizontalLine, AuthButtons, IconHolder,ErrorMsg };
