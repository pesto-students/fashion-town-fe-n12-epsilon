import React from "react";
import { LoadingContainer } from "./productListingStyledComponent";
import { Spin } from "antd";

function LoadingList() {
  return (
    <LoadingContainer>
      <Spin size="large" />
    </LoadingContainer>
  );
}

export default LoadingList;
