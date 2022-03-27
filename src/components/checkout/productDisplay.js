import React from "react";
import { connect } from "react-redux";
import config from "config/config";

import {
  Image,
  Row,
  Col,
  Typography,
  Space,
  Button,
  Tooltip,
  Select,
  Card,
} from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { setCart } from "redux/actions/cartActions";

const { Text } = Typography;
const { Option } = Select;

function ProductDisplay({ product, cart, setCart }) {
  const removeProductFromCart = (productId, size) => {
    const updatedCart = cart.filter(
      (product) => product.productId !== productId || product.size !== size
    );
    setCart(updatedCart);
  };

  const changeProductAttribute = (productId, attribute, value) => {
    cart.forEach((product) => {
      if (product.productId === productId) {
        product[attribute] = value;
      }
    });
    const updatedCart = [...cart];
    setCart(updatedCart);
  };

  return (
    <Card>
      <Row>
        <Col xs={24} sm={24} md={4} lg={4}>
          <Image src={product.image} />
        </Col>

        <Col xs={1} sm={1} md={1} lg={1} />

        <Col xs={17} sm={17} md={17} lg={17}>
          <Row>
            <Space direction="vertical">
              <Text strong>{product.brand}</Text>

              <Text>{product.title.substr(0, 40) + "..."}</Text>

              <Row>
                <Col xs={24} sm={24} md={9} lg={12}>
                  <Space>
                    <Text> Qty: </Text>
                    <Button.Group>
                      <Space>
                        <Button
                          size="small"
                          onClick={() =>
                            changeProductAttribute(
                              product.productId,
                              "qty",
                              product.qty === 1 ? 1 : product.qty - 1
                            )
                          }
                        >
                          <MinusOutlined />
                        </Button>
                        <Text> {product.qty}</Text>
                        <Button
                          size="small"
                          onClick={() =>
                            changeProductAttribute(
                              product.productId,
                              "qty",
                              product.qty + 1
                            )
                          }
                        >
                          <PlusOutlined />
                        </Button>
                      </Space>
                    </Button.Group>
                  </Space>
                </Col>

                <Col xs={24} sm={24} md={9} lg={12}>
                  {product.size && (
                    <Space>
                      <Text>Size: </Text>
                      <Select
                        defaultValue={product.size}
                        onChange={(value) =>
                          changeProductAttribute(
                            product.productId,
                            "size",
                            value
                          )
                        }
                      >
                        {config.sizeArray.map((size) => (
                          <Option value={size}>{size.toUpperCase()}</Option>
                        ))}
                      </Select>
                    </Space>
                  )}
                </Col>

                <Col xs={24} sm={24} md={6} lg={6}></Col>
              </Row>
              <Text strong>Rs. {product.price}</Text>
            </Space>
          </Row>
        </Col>

        <Col xs={2} sm={2} md={2} lg={2}>
          <Tooltip title="Remove">
            <Button
              shape="circle"
              icon={<CloseOutlined />}
              onClick={() =>
                removeProductFromCart(product.productId, product.size)
              }
            />
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
}

const mapStateToProps = ({ Cart }) => {
  return { cart: Cart.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCart: (cart) => {
      dispatch(setCart(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDisplay);
