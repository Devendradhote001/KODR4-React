import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1>Logo</h1>

      <div className="flex gap-6 text-xl">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
