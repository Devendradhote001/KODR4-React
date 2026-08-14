import React from "react";
import { useContextData } from "../context/ProductContext";

const Navbar = () => {
  let { setIsCartOpen } = useContextData();

  return (
    <div className="flex justify-between items-center">
      <h1>Logo</h1>
      <div className="flex gap-6">
        <p className="cursor-pointer" onClick={() => setIsCartOpen(false)}>
          Home
        </p>
        <p className="cursor-pointer" onClick={() => setIsCartOpen(true)}>
          Cart
        </p>
      </div>

      <button>Signin</button>
    </div>
  );
};

export default Navbar;
