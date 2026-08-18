import React from "react";
import { Navigate, Outlet } from "react-router";
import { useContextData } from "../../context/AuthContext";

const Private = () => {
  console.log("private rendered..");

  let { isLoggedIn } = useContextData();

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default Private;
