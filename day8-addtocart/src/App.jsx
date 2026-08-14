import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import ProductCard from "./components/ProductCart";
import CartPage from "./pages/CartPage";
import { useContextData } from "./context/ProductContext";

const App = () => {
  let { isCartOpen, productsData } = useContextData();

  return (
    <div className="flex flex-col gap-6">
      <Navbar />

      {isCartOpen ? (
        <CartPage />
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {productsData.map((val) => (
            <ProductCard key={val.id} product={val} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
