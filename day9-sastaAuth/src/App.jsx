import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useContextData } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Navigate, NavLink, Route, Routes } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  const [pageName, setPageName] = useState("home");

  let { toggle, setToggle, loggedInUser } = useContextData();

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
