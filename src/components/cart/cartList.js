import React from "react";

import { connect } from "react-redux";

import { List, Row, Col } from "antd";

import ProductDisplay from "../checkout/productDisplay";
import { CartListContainer } from "./cartStyledComponent";

function CartList(props) {
  const { cart } = props;

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
const mapStateToProps = (state) => {
  return { cart: state.Cart.cart };
};

export default connect(mapStateToProps)(CartList);