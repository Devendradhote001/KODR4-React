import React from "react";
import { useLoaderData } from "react-router";

const Product = () => {
  console.log("product component rendered..");  

  let data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Product page</h1>
    </div>
  );
};

export default Product;
