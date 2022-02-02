import { Skeleton, List, Card } from "antd";
import React from "react";
import { ProductListItems } from "../productListing/productListingStyledComponent";
import {
  SkeletonImage
} from "./loadingAnimationsStyledComponent";

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
        <ProductListItems key={index}>
          <Card bodyStyle={{ padding: 15 }}>
            <SkeletonImage active />
            <Skeleton loading={true} active></Skeleton>
          </Card>
        </ProductListItems>
      )}
    />
  );
}
export default ProductListLoading;
