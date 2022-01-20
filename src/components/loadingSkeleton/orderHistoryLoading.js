import React from "react";
import { Skeleton, Switch, List, Avatar } from "antd";
import { ListCart } from "./loadingSkeletonStyledComponent";

function OrderHistoryLoading() {
  const listData = [];
  for (let i = 0; i < 4; i++) {
    listData.push({});
  }
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <ListCart title>
        <List.Item key={item.title}>
          <Skeleton loading={true} active avatar></Skeleton>
        </List.Item>
        </ListCart>
      )}
    />
  );
}

export default OrderHistoryLoading;
