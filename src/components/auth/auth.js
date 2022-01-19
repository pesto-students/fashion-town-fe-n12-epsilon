import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useLocation, useNavigate } from "react-router-dom";
import { DisplayText, NameInitialBox } from "./authStyledComponent";
import { Dropdown } from "antd";

import { setUserName } from "../../redux/actions/authActions";
import { setCurrentPath } from "../../redux/actions/redirectActions";

import UserMenu from "./userMenu";

function Auth(props) {
  const [isLogin, setLogin] = useState(false);
  const [userInitial, setUserInitial] = useState(null);
  const [userName, setUserName] = useState(null);

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
      props.setUserName(currentUser.displayName);
    }
  });

  const goToLogInPage = () => {
    const currentPath = location.pathname + location.search;
    props.setCurrentPath(currentPath);
    navigate("signIn");
  };

  useEffect(() => {
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
