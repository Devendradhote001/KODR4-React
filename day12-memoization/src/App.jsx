import React from "react";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import { useCallback } from "react";
import { useMemo } from "react";

const App = () => {
  console.log("app rendering...");
  const [count, setCount] = useState(0);

  let calc = useMemo(() => {
    console.log("heavy cal running...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  const [user, setUser] = useState({
    name: "hello",
    age: 89,
  });

  let greet = useCallback(() => {
    console.log("good afternoon");
  }, []);

  return (
    <div>
      <h1>App - {count}</h1>
      <h1>name - {user.name}</h1>
      <h1>Expensive calculation - {calc}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUser({ name: "pol", age: 89 })}>
        change user name
      </button>
      {/* <Home greet={greet} user={user} />
      <About /> */}
    </div>
  );
};

export default App;
