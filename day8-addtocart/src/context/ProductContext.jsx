import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

let MyCart = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

  let increaseQuantity = (productId) => {
    setCartItems((prev) => {
      let data = prev.map((val) => {
        return val.id === productId
          ? { ...val, quantity: val.quantity + 1 }
          : val;
      });
      console.log(data);
      return data;
    });
  };

  return (
    <MyCart.Provider
      value={{
        productsData,
        setProductsData,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        increaseQuantity,
      }}
    >
      {children}
    </MyCart.Provider>
  );
};

export let useContextData = () => useContext(MyCart);
