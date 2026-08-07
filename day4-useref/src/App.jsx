import React, { useRef, useState } from "react";

import { useForm } from "react-hook-form";

const App = () => {
  let {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  console.log("errrors->", errors);

  let formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1>Ref</h1>

      <form onSubmit={handleSubmit(formSubmit)} action="">
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S/,
              message: "Blank spaces not allowed",
            },
          })}
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />{" "}
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <input
          {...register("email", {
            required: "Email is required",
          })}
          id="email"
          name="email"
          type="text"
          placeholder="email"
        />{" "}
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters is required",
            },
          })}
          type="text"
          placeholder="Password"
        />{" "}
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
