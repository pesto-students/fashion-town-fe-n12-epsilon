import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setCurrentPath } from "../../redux/actions/redirectActions";

function PrivateRoute({ storeAuth, children, setCurrentPath }) {
  const location = useLocation();
  const currentPath = location.pathname + location.search;
  setCurrentPath(currentPath);
  return storeAuth ? children : <Navigate to="/signIn" />;
}

const mapStateToProps = ({ Auth }) => {
  return { storeAuth: Auth.storeAuth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPath: (currentPath) => {
      dispatch(setCurrentPath(currentPath));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
