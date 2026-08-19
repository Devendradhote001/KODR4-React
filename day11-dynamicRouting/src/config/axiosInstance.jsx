import axios from "axios";

export let axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// interceptors - middlewares for req and res


axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response in interceptors", response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);
