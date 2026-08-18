import React from "react";
import { Navigate, Outlet } from "react-router";
import { useContextData } from "../../context/AuthContext";

const Public = () => {
  let { isLoggedIn } = useContextData();

  if (isLoggedIn) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default Public;
