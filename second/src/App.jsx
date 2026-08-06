import React, { useState } from "react";

const App = () => {
  console.log("app rendering..");
  const [user, setUser] = useState({
    name: "Raghav",
    age: 78,
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Name is {user.name}</h1>
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          user.name = "Chirag";
          console.log(user.name);
        }}
      >
        Change name
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
