import React from "react";

const Login = () => {
  let user = {
    name: "john",
    role: "user",
  };

  let admin = {
    name: "john",
    role: "admin",
  };

  let supAdmin = {
    name: "john",
    role: "sup_admin",
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6">
      <button
        onClick={() => localStorage.setItem("user", JSON.stringify(user))}
        className="p-4 text-white bg-blue-600 rounded"
      >
        User login
      </button>
      <button
        onClick={() => localStorage.setItem("user", JSON.stringify(admin))}
        className="p-4 text-white bg-blue-600 rounded"
      >
        Admin login
      </button>
      <button
        onClick={() => localStorage.setItem("user", JSON.stringify(supAdmin))}
        className="p-4 text-white bg-blue-600 rounded"
      >
        Sup admin login
      </button>
    </div>
  );
};

export default Login;
