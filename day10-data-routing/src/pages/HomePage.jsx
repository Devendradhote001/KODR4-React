import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const HomePage = () => {
  console.log("home rendered..");
  return (
    <div>
      <h1>Home page</h1>
      <Outlet />
    </div>
  );
};

export default HomePage;
