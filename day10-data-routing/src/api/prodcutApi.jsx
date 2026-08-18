import axios from "axios";

export let getData = async () => {
  console.log("api function running...");
  try {
    let res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
