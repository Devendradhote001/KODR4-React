import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
