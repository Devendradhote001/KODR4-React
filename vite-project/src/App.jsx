import React from "react";

const App = () => {
  let a = 90;

  return (
    <div>
      <h1>bye - {a}</h1>
      <button onClick={() => a++}>increment</button>
    </div>
  );
};

export default App;
