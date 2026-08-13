import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Auth from "./components/Auth";
import HOF from "./components/HOF";
import Home from "./components/Home";
import Post from "./components/Post";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios("https://fakestoreapi.com/products");
        console.log(res);
        setProductsData(res.data);
      } catch (error) {
        console.log("error in api", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <h1>Loading products...</h1>;

  return (
    <div>
      <h1>Hello</h1>
      <Auth />
    </div>
  );
};

export default App;
