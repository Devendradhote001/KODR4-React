import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let MyCart = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      console.log(res);
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyCart.Provider
      value={{
        productsData,
        setProductsData,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </MyCart.Provider>
  );
};

export let useContextData = () => useContext(MyCart);
