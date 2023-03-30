import React from "react";
import { List, Row, Col, Image, Typography, Space } from "antd";
import { ListCart, OrderHistoryCard } from "./orderHistoryStyledComponent";
import moment from "moment";
const { Text } = Typography;
function OrderHistoryList({ orderHistory }) {
  const getDateString = (utcString) => {
    return moment(parseInt(utcString)).format("dddd, MMMM Do YYYY, h:mm A");
  };

  return (
    <OrderHistoryCard>
      <List
        itemLayout="horizontal"
        dataSource={orderHistory}
        renderItem={(order) => (
          <List.Item>
            <ListCart
              type="inner"
              extra={getDateString(order.createdOn)}
              title={`Order ID : ${order.id}`}
            >
              <List
                itemLayout="horizontal"
                dataSource={order.items}
                renderItem={(item) => (
                  <List.Item>
                    <Row xs={24} sm={24} md={24} lg={24}>
                      <Space size={"large"} align="start">
                        <Col>
                          <Image src={item.image} width={100} />
                        </Col>
                        <Col>
                          <Row>
                            <Col>
                              <Space direction="vertical">
                                <Text strong>{item.brand}</Text>

                                <Text>{item.title}</Text>

                                <Space size={"large"}>
                                  <Text strong type="secondary">
                                    Qty: {item.qty}
                                  </Text>
                                  {item.size && (
                                    <Text strong type="secondary">
                                      Size: {item.size.toUpperCase()}
                                    </Text>
                                  )}
                                </Space>
                                <Text>Rs. {item.price * item.qty}</Text>
                              </Space>
                            </Col>
                          </Row>
                        </Col>
                      </Space>
                    </Row>
                  </List.Item>
                )}
              />
            </ListCart>
          </List.Item>
        )}
      />
    </OrderHistoryCard>
  );
}

export default OrderHistoryList;
