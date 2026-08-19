import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Users from "../pages/Users";
import ProductDetail from "../pages/ProductDetail";
import { getProductsApi } from "../api/productApi";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
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
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "shop",
          loader: getProductsApi,
          hydrateFallbackElement: <h1>loading products...</h1>,
          element: <Shop />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "shop/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
