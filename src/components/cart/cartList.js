import React from "react";

import { connect } from "react-redux";

import { List, Row, Col, Typography, Select } from "antd";

import ProductDisplay from "./productDisplay";

const { Text } = Typography;
const { Option } = Select;

function CartList(props) {
  const { cart } = props;

  return (
    <>
      <Row>
        <Col lg={24}>
          <List
            style={{ background: "white", width: "100%", padding: "5%" }}
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={(product) => (
              <List.Item>
                <ProductDisplay product={product} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
function mapStateToProps(state) {
  return { cart: state.Cart.cart };
}

export default connect(mapStateToProps)(CartList);
