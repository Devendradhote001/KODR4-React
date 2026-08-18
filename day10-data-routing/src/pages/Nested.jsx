import React from "react";
import { Outlet } from "react-router";

const Nested = () => {
  return (
    <div>
      <h1>Hey i m nested inside a route</h1>
      <Outlet />
    </div>
  );
};

export default Nested;
