import React from "react";
import Compo3 from "./Compo3";

const Compo2 = ({ getData }) => {
  return (
    <div>
      <h1>Comp 2</h1>
      <Compo3 getData={getData} />
    </div>
  );
};

export default Compo2;
