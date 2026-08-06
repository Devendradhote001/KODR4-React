import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  console.log("header rerender..");
  return (
    <header>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>
        <h1>Hi i am react developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          molestias.
        </p>
      </div>
    </header>
  );
};

export default Header;
