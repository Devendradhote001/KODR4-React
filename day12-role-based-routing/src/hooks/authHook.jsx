import { Navigate, redirect } from "react-router";

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const requireAuth = () => {
  let user = getUser();

  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return user;
};

export const allowedRoles = (roles) => {
  let user = getUser();

  if (!roles.includes(user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }

  return user;
};
