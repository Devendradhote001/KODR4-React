import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import { getProductsApi } from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  let data = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default Shop;
