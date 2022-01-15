import { Button } from "antd";
import styled from "styled-components";

const CartBox = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 500px;
  overflow-y: scroll;
`;
const CheckoutButtonWrapper = styled.div`
  margin: 0% 10% 5% 10%;
`;
const NextButton = styled(Button)`
  background: #ff7f3f;
  border-radius: 5px;
  color: white;
  margin-top: 15px;
`;
const CheckoutPageWrapper = styled.div`
  min-height: 70vh;
`;
const HorizontalLine = styled.div`
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 0px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export { CartBox, CheckoutButtonWrapper, CheckoutPageWrapper, HorizontalLine ,NextButton};
