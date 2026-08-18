import { createRoot } from "react-dom/client";
import "./index.css";

import AppRoutes from "./routes/AppRoutes.jsx";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);
