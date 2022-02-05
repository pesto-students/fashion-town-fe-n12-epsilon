import { Button, Card, Steps } from "antd";
import styled from "styled-components";

const CartBox = styled.div`
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CheckoutButtonWrapper = styled.div`
  margin: 5% 10% 5% 10%;
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

const CheckOutStepsWrapper = styled(Steps)`
  margin-top: 2%;
  margin-bottom: 2%;
`;
const OrderSummaryCard = styled(Card)`
  width: 300px;
`;
const SamplePaymentInfo = styled.div`
  color: red;
`;

export {
  CartBox,
  CheckoutButtonWrapper,
  CheckoutPageWrapper,
  HorizontalLine,
  NextButton,
  CheckOutStepsWrapper,
  OrderSummaryCard,
  SamplePaymentInfo,
};
