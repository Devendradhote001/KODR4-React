import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex gap-5">
      <Navbar />
      <div className="border-l p-4 border-gray-400">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
