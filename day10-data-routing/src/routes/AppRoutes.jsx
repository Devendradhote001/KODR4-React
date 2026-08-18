import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginForm from "../pages/LoginPage";
import RegisterForm from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Product from "../pages/Product";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { getData } from "../api/prodcutApi";
import Private from "./protectedRoutes/Private";
import Public from "./protectedRoutes/Public";
import ShopLayout from "../layouts/ShopLayout";
import Men from "../pages/shop/Men";
import Women from "../pages/shop/Women";
import Others from "../pages/shop/Others";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Public />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginForm />,
            },
            {
              path: "register",
              element: <RegisterForm />,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <Private />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            { path: "about", element: <AboutPage /> },
            {
              path: "shop",
              loader: getData,
              hydrateFallbackElement: <h1>Loading...</h1>,
              element: <ShopLayout />,
              children: [
                {
                  path: "men",
                  element: <Men />,
                },
                {
                  path: "women",
                  element: <Women />,
                },
                {
                  path: "others",
                  element: <Others />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
