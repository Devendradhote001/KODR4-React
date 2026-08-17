import React, { useEffect } from "react";
import { useContextData } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let navigate = useNavigate();
  let { loggedInUser } = useContextData();
  console.log("protected rendering..", loggedInUser);

  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
