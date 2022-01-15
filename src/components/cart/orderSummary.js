import React from "react";
import Payment from "../payment/payment";
import { Row, Col, Typography, Card} from "antd";
import {
  HorizontalLine,
  NextButton,
} from "./cartStyledComponent";

const { Title, Text } = Typography;

function OrderSummary({cart}) {

  const DeliveryCharge = 50;

  const calculateTotalMRP = () => {
    let totalMRP = 0;
    cart.forEach((product) => {
      const productTotalPrice = product.price * product.qty;
      totalMRP += productTotalPrice;
    });
    return totalMRP + DeliveryCharge;
  };

  // if cart has Items ? show summary
  if(cart.length){
    return (
        <Card style={{ width: 300 }}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text type="secondary">PRICE DETAILS</Text>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text type="secondary">({cart.length} Items)</Text>
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text>Total MRP</Text>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              Rs. {calculateTotalMRP()}
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text>Delivery charges</Text>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              Rs. 50
            </Col>
          </Row>
          <HorizontalLine />
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text strong>Total Amount</Text>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Text strong> Rs. {calculateTotalMRP()}</Text>
            </Col>
          </Row>
          <NextButton block>
            {/* <Link to={`/checkout`}>PROCEED</Link> */}
          </NextButton>
          <Payment calculateTotalMRP={calculateTotalMRP} />
        </Card>
      );
  }
  
  else{
      return <></>
  }

}

export default OrderSummary;
