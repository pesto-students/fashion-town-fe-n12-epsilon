import React from "react";

import { connect } from "react-redux";

import { List, Row, Col } from "antd";

import ProductDisplay from "../checkout/productDisplay";
import { CartListContainer } from "./cartStyledComponent";

function CartList({ cart }) {
  return (
    <>
      <Row>
        <Col lg={24}>
          <CartListContainer
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
const mapStateToProps = ({ Cart }) => {
  return { cart: Cart.cart };
};

export default connect(mapStateToProps)(CartList);
