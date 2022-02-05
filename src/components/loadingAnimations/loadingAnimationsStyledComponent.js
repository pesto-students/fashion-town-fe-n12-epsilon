import { LoadingOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
import styled from "styled-components";

export const ListCart = styled(Card)`
  width: 50%;
  margin-left: 15%;
`;
export const OrderHistoryCard = styled(Card)`
  min-height: 70vh;
`;
export const DefaultLoadingWrapper = styled.div`
  width: 80%;
  margin: 5%;
`;

export const SkeletonImage = styled(Skeleton.Image)`
  width: 167;
  height: 226;
`;
export const LoadingIcon = styled(LoadingOutlined)`
  font-size: 50px;
`;
