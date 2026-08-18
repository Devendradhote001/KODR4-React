import { createContext, useContext } from "react";

let Auth = createContext();

export const AuthProvider = ({ children }) => {
  let isLoggedIn = true;

  return <Auth.Provider value={{ isLoggedIn }}>{children}</Auth.Provider>;
};

export let useContextData = () => useContext(Auth);
