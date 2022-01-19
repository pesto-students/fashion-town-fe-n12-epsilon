import React from "react";
import { connect } from "react-redux";

import { Card, Space, Typography } from "antd";
const { Text, Title } = Typography;

function AddressDisplay(props) {
  const { address } = props;

  return (
    <Card>
      <Space direction="vertical">
        <Title level={5}>Address</Title>
        <Text strong>{address.name}</Text>
        <Text>{address.phone}</Text>
        <Text>{address.street}</Text>
        <Text>{address.city}</Text>
        <Text>{address.state}</Text>
        <Text>{address.pin}</Text>
      </Space>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return { address: state.Cart.address };
};

export default connect(mapStateToProps)(AddressDisplay);
