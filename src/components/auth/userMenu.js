import React from "react";
import { connect } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

import { Menu } from "antd";
import { UserNameCapitalize } from "./authStyledComponent";

import { setStoreAuth, setUserName } from "../../redux/actions/authActions";

function UserMenu(props) {
  
  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      props.setUserName(null);
      props.setStoreAuth(null);
    } catch (error) {
      console.log(error);
    }
  };

  if (props) {
    return (
      <Menu>
        <Menu.Item disabled>
          <UserNameCapitalize>Hello {props.userName} !</UserNameCapitalize>
        </Menu.Item>
        <Menu.Item>
          <p>Orders</p>
        </Menu.Item>
        <Menu.Item>
          <p onClick={logout}>Logout</p>
        </Menu.Item>
      </Menu>
    );
  }
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
