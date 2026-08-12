import React, { useEffect, useState } from "react";

const UseEffect = () => {
  console.log("hello");

  let [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("hey i m in effect");
  }, [toggle]);

  return (
    <div>
      <h1>Hello {count}</h1>
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>Change toggle</button>
    </div>
  );
};

export default UseEffect;
