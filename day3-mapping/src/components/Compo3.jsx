import React from "react";

const Compo3 = ({ getData }) => {
  let greet = "good afternoon";

  getData(greet);

  return (
    <div>
      <h1>Comp 3</h1>
    </div>
  );
};

export default Compo3;
