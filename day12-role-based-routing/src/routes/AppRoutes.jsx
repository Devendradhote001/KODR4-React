import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/main/Dashboard";
import Users from "../pages/main/Users";
import UserList from "../pages/main/UserList";
import Products from "../pages/main/Products";
import Reports from "../pages/main/Reports";
import Profile from "../pages/main/Profile";
import Orders from "../pages/main/Orders";
import Settings from "../pages/main/Settings";
import AdminManagement from "../pages/main/AdminManagement";
import { allowedRoles, requireAuth } from "../hooks/authHook";
import Error from "../components/Error";
import { publicRoute } from "./PublicRoutes";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/main",
      loader: requireAuth,
      errorElement: <Error />,
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "users",
          loader: () => allowedRoles(["admin", "sup_admin"]),
          errorElement: <Error />,
          element: <Users />,
        },
        {
          path: "user-list",
          loader: () => allowedRoles(["admin", "sup_admin"]),
          errorElement: <Error />,
          element: <UserList />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "reports",
          loader: () => allowedRoles(["sup_admin"]),
          errorElement: <Error />,
          element: <Reports />,
        },
        ...publicRoute,
        {
          path: "settings",
          loader: () => allowedRoles(["sup_admin"]),
          errorElement: <Error />,
          element: <Settings />,
        },
        {
          path: "admin-management",
          loader: () => allowedRoles(["sup_admin"]),
          errorElement: <Error />,
          element: <AdminManagement />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
