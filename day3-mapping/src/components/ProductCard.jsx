import React, { useState } from "react";

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="flex p-4 border flex-col gap-2 border-white rounded-xl">
      <div className="h-40">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-semibold">{product.title}</h1>
        <p className="text-sm ">{product.price}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button
          onClick={() => deleteProduct(product.id)}
          className="p-2 text-white bg-red-700 rounded text-black"
        >
          Delete
        </button>
        <button className="p-2 bg-green-500 rounded bg-white text-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
