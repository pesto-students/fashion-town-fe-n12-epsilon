import React from "react";
import { Skeleton } from "antd";
import { DefaultLoadingWrapper } from "./loadingAnimationsStyledComponent";

function DefaultLoading() {
  return (
    <DefaultLoadingWrapper>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </DefaultLoadingWrapper>
  );
}

export default DefaultLoading;
