import React from "react";
import Compo2 from "./Compo2";

const Compo1 = ({ getData }) => {
  return (
    <div>
      <h1>Comp 1</h1>
      <Compo2 getData={getData} />
    </div>
  );
};

export default Compo1;
