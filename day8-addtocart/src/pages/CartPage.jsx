import React from "react";
import { useContextData } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  let { cartItems } = useContextData();

  return (
    <div>
      <h1>Cart screen</h1>
      <div className="grid grid-cols-3 gap-5">
        {cartItems.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
