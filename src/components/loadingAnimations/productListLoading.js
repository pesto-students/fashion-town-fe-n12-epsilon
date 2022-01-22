import { Skeleton, List,Card } from "antd";
import React from "react";

function ProductListLoading() {
  const listData = [];
  for (let i = 0; i < 20; i++) {
    listData.push({});
  }
  return (
    <List
      grid={{
        xs: 2,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 5,
      }}
      dataSource={listData}
      renderItem={(item, index) => (
        <List.Item style={{ width: "200px" }} key={index}>
          <Card>
            <Skeleton.Image style={{width:200,height:226}} active />
            <Skeleton style={{width:200}} loading={true} active ></Skeleton>
          </Card>
        </List.Item>
      )}
    />
  );
}
export default ProductListLoading;
