import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex gap-4 h-screen">
      <Navbar />
      <div className="p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
