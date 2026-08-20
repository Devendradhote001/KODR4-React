import { axiosInstance } from "../config/axiosInstance";

export const getProductsApi = async () => {
  try {
    console.log("called...")
    let res = await axiosInstance.get("/products");
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error in products api", error);
  }
};

export const getSingleProductApi = async (id) => {
  try {
    let res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log("error in details api", error);
  }
};
