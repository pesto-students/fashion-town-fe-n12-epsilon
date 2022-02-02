import styled from "styled-components";
import { Card, Input, Button } from "antd";
const SellNowContainer = styled.div`
  height: 110vh;
  width: 100%;
  background: #ff7878; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f9575782, #e9e7e7);
  background: linear-gradient(to right, #f9575782, #e9e7e7);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SellNowInput = styled(Input)`
  border-radius: 5px;
`;
const ProductDetailsWrapper = styled(Card)`
  width: 25%;
`;
const NextButton = styled(Button)`
  background: #ff7f3f;
  border-radius: 5px;
  color: white;
  margin-top: 15px;
  width: 100%;
  &:hover {
    background: #ff7f3f;
    color: white;
  }
  &:active {
    background: #ff7f3f;
    color: white;
  }
  &:focus {
    background: #ff7f3f;
    color: white;
  }
`;

const UploadTextWrapper = styled.div`
  margin-top: 8;
`;
const UploadImageComponent = styled.img`
width: 100%;
`
export {
  SellNowContainer,
  SellNowInput,
  ProductDetailsWrapper,
  NextButton,
  UploadTextWrapper,
  UploadImageComponent,
};
