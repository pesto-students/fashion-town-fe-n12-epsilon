import React from "react";
import { connect } from "react-redux";
import { useQuery } from "@apollo/client";

import moment from "moment";
import { ORDER_HISTORY_QUERY } from "../../graphQlQueries/orderHistory";

import { List, Skeleton,Row, Col, Image, Typography, Space } from "antd";
import { ListCart,OrderHistoryCard } from "./orderHistoryStyledComponent";
const { Text } = Typography;

function OrderHistory(props) {
  console.log(props.storeAuth.email);
  const { error, loading, data } = useQuery(ORDER_HISTORY_QUERY, {
    variables: { orderByEmailId: props.storeAuth.email },
  });

  const getDateString = (utcString) => {
    return moment(parseInt(utcString)).format("dddd, MMMM Do YYYY, h:mm A");
  };
  if (loading) {
    <Skeleton active />;
  }

  if (data) {
    console.log(data);
    const orderHistory = data.getOrderHistory;
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
                                  <Text>Rs. {item.price}</Text>
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
  } else {
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return { storeAuth: state.Auth.storeAuth };
};

export default connect(mapStateToProps)(OrderHistory);

// items: Array(2)
// 0:
// brand: "Global Desi"
// image: "http://assets.myntassets.com/v1/assets/images/8882871/2019/3/18/88ebe5ff-f212-4395-b10a-5c5d4ca8f2f61552898253021-Global-Desi-Black-Solid-Sling-Bag-5781552898251905-1.jpg"
// productId: "8882871"
// qty: 1
// size: null
// title: "Global Desi Black Solid Sling Bag"
// __typename: "Item"
// [[Prototype]]: Object
// 1: {__typename: 'Item', productId: '7692580', brand: 'Global Desi', title: 'Global Desi Black & White Striped Handheld Bag', image: 'http://assets.myntassets.com/v1/assets/images/7692…--White-Striped-Handheld-Bag-55215458920837-1.jpg', …}
// length: 2
// [[Prototype]]: Array(0)
// orderByEmailId: "vikram.obend1@gmail.com"
