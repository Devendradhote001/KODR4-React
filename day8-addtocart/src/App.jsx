import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import CartPage from "./pages/CartPage";
import { useContextData } from "./context/ProductContext";

const App = () => {
  let { isCartOpen, productsData, cartItems } = useContextData();

  return (
    <div className="flex flex-col gap-6">
      <Navbar />

      {isCartOpen ? (
        <CartPage />
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {productsData.map((val) => {
            let isInCart = cartItems.find((elem) => elem.id === val.id);
            return (
              <ProductCard key={val.id} product={val} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
