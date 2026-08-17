import { createContext, useContext, useState } from "react";

let Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  return (
    <Auth.Provider
      value={{
        toggle,
        setToggle,
        setLoggedInUser,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export let useContextData = () => useContext(Auth);
