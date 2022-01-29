import React from "react";
import { connect } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { Col, Menu } from "antd";
import { DisplayText, UserNameCapitalize } from "./authStyledComponent";

import { setStoreAuth, setUserName } from "../../redux/actions/authActions";
import links from "../../config/routeLinks";

function UserMenu(props) {
  const { setUserName, setStoreAuth, userName } = props;

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUserName(null);
      setStoreAuth(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userName && (
        <>
          <Col xs={0} sm={0} md={0} lg={0} xl={24}>
            <Menu>
              <Menu.Item disabled>
                <UserNameCapitalize>Hello {userName} !</UserNameCapitalize>
              </Menu.Item>
              <Menu.Item>
                <Link to={links.orderHistory}>
                  <p>Orders</p>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <p onClick={logout}>Logout</p>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={0}>
            <Link to={links.orderHistory}>
              <DisplayText>ORDERS</DisplayText>
            </Link>
            <DisplayText onClick={logout}>LOGOUT</DisplayText>
          </Col>
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return { userName: state.Auth.userName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => {
      dispatch(setUserName(userName));
    },
    setStoreAuth: (auth) => {
      dispatch(setStoreAuth(auth));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
