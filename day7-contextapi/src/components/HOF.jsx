import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const HOF = ({ children }) => {
  let data = useContext(MyStore);

  console.log(data);
  //   let div = React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "hello")
  //   );

  return (
    <div>
      <h1>HOF</h1>
      {children}
    </div>
  );
};

export default HOF;
