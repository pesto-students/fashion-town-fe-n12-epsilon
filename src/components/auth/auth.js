import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
import {
  AuthHeaderWrapper,
  DisplayText,
  NameInitialBox,
} from "./authStyledComponent";
import { Col, Dropdown } from "antd";

import { setUserName } from "../../redux/actions/authActions";
import { setCurrentPath } from "../../redux/actions/redirectActions";
import links from "../../config/routeLinks";
import UserMenu from "./userMenu";

function Auth({ setUserName, setCurrentPath, userName }) {
  const [isLogin, setLogin] = useState(false);
  const [userInitial, setUserInitial] = useState(null);
  // const [userName, setUserDisplayName] = useState(null);

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
      setUserName(currentUser.displayName);
    }
  });

  const goToLogInPage = () => {
    const currentPath = location.pathname + location.search;
    setCurrentPath(currentPath);
    navigate(links.signIn);
  };

  useEffect(() => {
    if (userName) {
      setUserInitial(generateUserInitial(userName));
      setUserName(userName);
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [userName]);

  return (
    <>
      <Col xs={0} sm={0} md={0} lg={0} xl={24}>
        <AuthHeaderWrapper>
          {isLogin && userInitial && (
            <Dropdown
              overlay={<UserMenu userName={userName} />}
              placement="bottomLeft"
            >
              <NameInitialBox>{userInitial}</NameInitialBox>
            </Dropdown>
          )}
          {!isLogin && <DisplayText onClick={goToLogInPage}>LOGIN</DisplayText>}
        </AuthHeaderWrapper>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={0}>
        {!isLogin && <DisplayText onClick={goToLogInPage}>LOGIN</DisplayText>}
        {isLogin && userInitial && <UserMenu userName={userName} />}
      </Col>
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
    setCurrentPath: (currentPath) => {
      dispatch(setCurrentPath(currentPath));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
