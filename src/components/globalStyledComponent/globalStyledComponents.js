import styled from "styled-components";
import { Button } from "antd";

export const ActionButton = styled(Button)`
  background: ${(props) => props.background};
  border-radius: 5px;
  color: white;
`;
