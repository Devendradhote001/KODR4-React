import React from "react";
import { useLocation } from "react-router";

const Home = () => {
  let loc = useLocation();
  console.log(loc);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
