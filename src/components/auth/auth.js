import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
import {
  AuthHeaderWrapper,
  DisplayText,
  NameInitialBox,
} from "./authStyledComponent";
import { Dropdown } from "antd";

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
