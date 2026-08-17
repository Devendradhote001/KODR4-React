import { useForm } from "react-hook-form";
import { useContextData } from "../context/AuthContext";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

export const useAuth = () => {
  let navigate = useNavigate();

  let {
    setToggle,
    setLoggedInUser,
    setRegisteredUsers,
    registeredUsers,
    loggedInUser,
  } = useContextData();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let loginHandler = (data) => {
    let user = registeredUsers.find(
      (val) => val.email === data.email && val.password === data.password
    );

    if (!user) {
      toast.error("invalid credentials");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    setLoggedInUser(user);
    navigate("/home");
    toast.success("User loggedin");
  };

  let registerHandler = (data) => {
    let arr = [...registeredUsers, { ...data, id: nanoid() }];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("user registered..");
    setToggle((prev) => !prev);
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    loginHandler,
    registerHandler,
    setToggle,
  };
};

// install react-router
// wrap your app component in main.jsx file with <BrowserRouter></BrowserRouter>
// then make a folder name routes.
// inside that folder make AppRoutes.jsx file
// then make a <Routes>
// <Route path="" element={<PageName} />
// </Routes>
// now, implement the useNavigate hook in both the form for switching between them

// after that, make ProtectedRoutes component for checking if user isin
// localstorage or not

