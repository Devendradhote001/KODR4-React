import React from "react";
import Compo1 from "./components/Compo1";

const Home = () => {
  let getData = (param) => {
    console.log(param);
  };

  return (
    <div>
      <h1>Home</h1>

      <Compo1 getData={getData} />
    </div>
  );
};

export default Home;
