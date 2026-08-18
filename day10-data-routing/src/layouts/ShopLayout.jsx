import React from "react";
import { NavLink, Outlet } from "react-router";

const ShopLayout = () => {
  return (
    <div className="flex gap-4 h-screen w-full">
      <div className="border-r h-full border-red-600">
        <nav className="flex flex-col gap-6 px-4">
          <NavLink to={"/main/shop/men"}>Men</NavLink>
          <NavLink to={"/main/shop/women"}>Women</NavLink>
          <NavLink to={"/main/shop/others"}>Others</NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ShopLayout;
