import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <h1>Hello i m data</h1>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
