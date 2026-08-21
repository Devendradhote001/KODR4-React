import React, { useEffect, useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { useDispatch } from "react-redux";
import { addUser } from "./reducers/authReducer";

const App = () => {
  let dispatch = useDispatch();

  let hydrateUser = () => {
    let user = JSON.parse(localStorage.getItem("loggedinUser"));

    if (user) {
      dispatch(addUser(user));
    }
  };
  useEffect(() => {
    hydrateUser();
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <RegisterForm setToggle={setToggle} />
      ) : (
        <LoginForm setToggle={setToggle} />
      )}
    </div>
  );
};

export default App;
