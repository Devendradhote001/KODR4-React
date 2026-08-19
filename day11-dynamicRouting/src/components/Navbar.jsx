import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 px-10 flex flex-col justify-between items-center border-r border-gray-400">
      <div className="p-4 flex flex-col">
        <h1 className="text-xl font-semibold mb-[50px]">logo</h1>

        <div className="flex flex-col gap-5 items-center text-xl">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
            to={"/main/shop"}
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
            to={"/main/users"}
          >
            Users
          </NavLink>
        </div>
      </div>
      <button>Signin</button>
    </div>
  );
};

export default Navbar;
