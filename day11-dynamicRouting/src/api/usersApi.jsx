import { axiosInstance } from "../config/axiosInstance";

export const getAllUsersApi = async () => {
  try {
    let res = await axiosInstance.get("/users");
    return res.data;
  } catch (error) {
    console.log("error in users api", error);
  }
};
