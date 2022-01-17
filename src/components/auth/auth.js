import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DisplayText, NameInitialBox } from "./authStyledComponent";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { connect } from "react-redux";
import UserMenu from "./userMenu";
import { onAuthStateChanged, getAuth } from "firebase/auth";
//import { auth } from "../../config/firebase-config";

function Auth(props) {
  const [isLogin, setLogin] = useState(false);
  const [userInitial, setUserInitial] = useState(null);
  const [userName, setUserName] = useState(null);
  const { dispatch } = props;
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const generateUserInitial = (fullName) => {
    const nameArray = fullName.split(" ");
    const firstNameInitial = nameArray[0].charAt(0).toUpperCase();
    const lastNameInitial = nameArray[nameArray.length - 1]
      .charAt(0)
      .toUpperCase();
    if (nameArray.length === 1) {
      return firstNameInitial;
    }
    return firstNameInitial + lastNameInitial;
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log(currentUser);
      dispatch({ type: "USER_NAME", payload: currentUser.displayName });
    }
  });

  const goToLogInPage = () => {
    console.log(location)
    const currentPath = location.pathname + location.search
    dispatch({ type: "CURRENT_PATH", payload: currentPath });
    navigate("signIn");
  };

  useEffect(() => {
    console.log(props.userName);
    if (props.userName) {
      setUserInitial(generateUserInitial(props.userName));
      setUserName(props.userName);
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [props]);

  return (
    <div style={{ width: "45px" }}>
      {isLogin && userInitial && (
        <Dropdown
          overlay={<UserMenu userName={userName} />}
          placement="bottomLeft"
        >
          <NameInitialBox>{userInitial}</NameInitialBox>
        </Dropdown>
      )}
      {!isLogin && <DisplayText onClick={goToLogInPage}>LOGIN</DisplayText>}
    </div>
  );
}

function mapStateToProps(state) {
  return { userName: state.Auth.userName };
}

export default connect(mapStateToProps)(Auth);
