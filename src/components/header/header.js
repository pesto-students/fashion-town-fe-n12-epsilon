import React from "react";
import Search from "../search/search";
import { Space, Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  NavBar,
  NavBarItems,
  NavBarGroup,
  NavText,
  Logo,
  NavBarActionGroup,
  NavBarActionItems,
} from "./headerStyledComponent";
import Wishlist from "../wishlist/wishlist";
import Cart from "../cart/cart";
import Auth from "../auth/auth";

function header() {
  return (
    <NavBar>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={3}>
          <Link to={`/`}>
              <Logo>Fashion Town</Logo>
          </Link>
        </Col>

        <Col className="gutter-row" span={5}>
          <NavBarGroup>
            <Space size={"large"}>
              <NavBarItems>
                <NavText>MEN</NavText>
              </NavBarItems>
              <NavBarItems>
                <NavText>WOMEN</NavText>
              </NavBarItems>
              <NavBarItems>
                <NavText>ACCESSORIES</NavText>
              </NavBarItems>
            </Space>
          </NavBarGroup>
        </Col>

        <Col className="gutter-row" span={5} style={{ zIndex: "-1" }}></Col>
        <Col className="gutter-row" span={8}>
          <NavBarItems>
            <Search />
          </NavBarItems>
        </Col>
        {/* <Col className="gutter-row" span={1}></Col> */}
        <Col className="gutter-row" span={3}>
          <NavBarActionGroup>
              <Row>
                <Col>
              <NavBarActionItems>
                <Auth />
              </NavBarActionItems>
              </Col>
              <Col>
              <NavBarActionItems >
                <Wishlist />
              </NavBarActionItems>
              </Col>
              <Col>
              <NavBarActionItems>
                <Cart />
              </NavBarActionItems>
              </Col>
              </Row>
          </NavBarActionGroup>
        </Col>
      </Row>
    </NavBar>
  );
}

export default header;
