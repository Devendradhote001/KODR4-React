import React, { Activity, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Ternary = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )} */}

      <Activity mode={toggle ? "visible" : "hidden"}>
        <Login setToggle={setToggle} />
      </Activity>
      <Activity mode={!toggle ? "visible" : "hidden"}>
        <Register setToggle={setToggle} />
      </Activity>
    </div>
  );
};

export default Ternary;
