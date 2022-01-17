import React from "react";
import { Menu } from "antd";
import { getAuth, signOut } from "firebase/auth";
import { UserNameCapitalize } from "./authStyledComponent";
import { connect } from "react-redux";

function UserMenu(props) {

  const { dispatch } = props;

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: "USER_NAME", payload: null });
        dispatch({ type: "STORE_AUTH", payload: null });
        console.log("Sign-out successful")
      })
      .catch((error) => {
        console.log(error)
      });
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
function mapStateToProps(state) {
  return { userName: state.Auth.userName };
}

export default  connect(mapStateToProps)(UserMenu);
