import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProductApi } from "../api/productApi";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  let getSingleProductData = async () => {
    let data = await getSingleProductApi(id);
    setProduct(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);

  if (isLoading) return <h1>Loading details...</h1>;

  return (
    <div>
      <h1>Product details</h1>
      <img width={400} src={product.image} alt="" />
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetail;
