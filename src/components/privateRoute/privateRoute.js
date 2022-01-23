import React from 'react'
import { Navigate } from "react-router-dom";

function privateRoute({ userEmail, children }) {
    return userEmail ? children : <Navigate to="/signIn" />;
}

export default privateRoute
