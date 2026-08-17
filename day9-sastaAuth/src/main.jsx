import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </AuthProvider>
);
