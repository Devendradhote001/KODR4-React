import React from "react";
import { NavLink } from "react-router";
import { getUser } from "../hooks/authHook";

const Navbar = () => {
  let user = getUser();

  return (
    <div className="flex flex-col gap-10 p-5">
      <h1>logo</h1>
      <div className="flex flex-col gap-5">
        <NavLink to={"/main"}>Dashboard</NavLink>
        <NavLink to={"/main/profile"}>Profile</NavLink>
        <NavLink to={"/main/orders"}>Orders</NavLink>
        <NavLink to={"/main/products"}>Products</NavLink>

        {user.role === "admin" && (
          <>
            <NavLink to={"/main/user-list"}>User List</NavLink>
            <NavLink to={"/main/users"}>Users</NavLink>
          </>
        )}

        {user.role === "sup_admin" && (
          <>
            <NavLink to={"/main/user-list"}>User List</NavLink>
            <NavLink to={"/main/users"}>Users</NavLink>
            <NavLink to={"/main/reports"}>Reports</NavLink>
            <NavLink to={"/main/settings"}>Settings</NavLink>
            <NavLink to={"/main/admin-management"}>Admin Management</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
