import React, { useState } from "react";
import Search from "components/search";
import { Space, Row, Col, Drawer } from "antd";
import { NavLink, Link } from "react-router-dom";
import {
  NavBar,
  NavBarItems,
  NavText,
  Logo,
  HamburgerIcon,
  HamburgerIconCol,
  SpaceCol,
  ContentCenterRow,
} from "./headerStyledComponent";

import Cart from "components/cart";
import Auth from "components/auth";
import links from "config/routeLinks";
import DrawerMenu from "./drawerMenu";

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <NavBar>
        <Row>
          <Col xs={0} sm={0} md={6} lg={6} xl={4}>
            <Link to={links.home}>
              <Logo>Fashion Town</Logo>
            </Link>
          </Col>
          <Col xs={2} sm={2} md={0} lg={0} xl={0}>
            <Link to={links.home}>
              <Logo>FT</Logo>
            </Link>
          </Col>

          <Col xs={0} sm={0} md={0} lg={0} xl={8}>
            <Row>
              <Space size={"large"}>
                <Col xs={0} sm={0} md={0} lg={0} xl={6}>
                  <NavBarItems>
                    <NavLink to={links.shop + links.menSection}>
                      <NavText>MEN</NavText>
                    </NavLink>
                  </NavBarItems>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={6}>
                  <NavBarItems>
                    <NavLink to={links.shop + links.womenSection}>
                      <NavText>WOMEN</NavText>
                    </NavLink>
                  </NavBarItems>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={6}>
                  <NavBarItems>
                    <NavLink to={links.shop + links.accessoriesSection}>
                      <NavText>ACCESSORIES</NavText>
                    </NavLink>
                  </NavBarItems>
                </Col>
                <Col xs={0} sm={0} md={0} lg={0} xl={6}>
                  <NavBarItems>
                    <NavLink to={links.shop + links.livingSections}>
                      <NavText>LIVING</NavText>
                    </NavLink>
                  </NavBarItems>
                </Col>
              </Space>
            </Row>
          </Col>

          <SpaceCol xs={1} sm={1} md={4} lg={1} xl={2}></SpaceCol>
          <Col xs={16} sm={17} md={12} lg={15} xl={7}>
            <Search />
          </Col>
          <SpaceCol xs={0} sm={0} md={0} lg={0} xl={1}></SpaceCol>
          <Col xs={0} sm={0} md={0} lg={0} xl={1}>
            <ContentCenterRow>
              <Space size={"large"} align="start">
                <Col>
                  <Auth />
                </Col>
                <Col>
                  <Cart />
                </Col>
              </Space>
            </ContentCenterRow>
          </Col>
          <HamburgerIconCol xs={4} sm={4} md={2} lg={2} xl={0}>
            <HamburgerIcon onClick={showDrawer} />
          </HamburgerIconCol>
        </Row>
      </NavBar>

      <Drawer
        title="MENU"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={250}
      >
        <DrawerMenu />
      </Drawer>
    </>
  );
}

export default Header;
