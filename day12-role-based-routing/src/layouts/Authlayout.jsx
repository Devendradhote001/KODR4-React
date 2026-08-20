import React from "react";
import { Outlet } from "react-router";

const Authlayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Authlayout;
