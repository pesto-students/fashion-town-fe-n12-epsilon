import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import { Col } from "antd";

const NavBar = styled.nav`
  width: 100%;
  height: 70px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(147, 147, 147, 0.25);
  padding-top: 20px;
`;
const Logo = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  margin-top: -8px;
  color: black;
`;
const NavText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  color: black;
`;
const NavBarItems = styled.div`
  padding: 0 40px;
`;

const NavBarSpace = styled.div`
  width: 40%;
  display: flex;
`;
const HamburgerIcon = styled(MenuOutlined)`
  font-size: 1.8em;
`;
const HamburgerIconCol = styled(Col)`
  text-align: right;
`;
const SpaceCol = styled(Col)`
  z-index: -1;
`;
export {
  NavBar,
  NavBarItems,
  Logo,
  NavText,
  NavBarSpace,
  HamburgerIcon,
  HamburgerIconCol,
  SpaceCol,
};
