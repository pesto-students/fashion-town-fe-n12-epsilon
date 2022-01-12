import React from "react";
import { List, Avatar, Image, Row, Col, Typography, Space } from "antd";
import { CartBox } from "./cardStyledComponent";
const { Text } = Typography;

function CartList({ cart }) {
  console.log(cart);
  return (
    <CartBox>
      <Row>
        <Col lg={24}>
          <List
            style={{ background: "white", width: "100%", padding: "5%" }}
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={(product) => (
              <List.Item>
                <Row>
                  <Space size={"large"}>
                    <Col>
                      <Image src={product.image} width={80} />
                    </Col>
                    <Col>
                      <Space direction="vertical">
                        <Text strong>{product.brand}</Text>
                        <Text>{product.title.substr(0, 40) + "..."}</Text>
                        <Row>
                          <Col xs={24} sm={24} md={9} lg={9}>
                            <Text>Size: {product.size.toUpperCase()} </Text>
                          </Col>
                          <Col xs={24} sm={24} md={6} lg={6}></Col>
                          <Col xs={24} sm={24} md={9} lg={9}>
                            <Text> Qty: {product.qty}</Text>
                          </Col>
                        </Row>
                      </Space>
                    </Col>
                  </Space>
                </Row>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </CartBox>
  );
}

export default CartList;
