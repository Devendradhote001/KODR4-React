import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  let error = useRouteError();
  if (error.status === 403) {
    return (
      <div>
        <h1>You are not allowed for this operation</h1>
      </div>
    );
  }

  if (error.status === 401) {
    return (
      <div>
        <h1>Please login first..</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Me error screen hu</h1>
    </div>
  );
};

export default Error;
