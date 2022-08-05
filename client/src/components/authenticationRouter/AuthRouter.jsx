import React from "react";
import {Outlet, Navigate} from "react-router-dom";
function AuthRouter() {
  const loggedin = localStorage.getItem("logStatus");
  return loggedin ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthRouter;
