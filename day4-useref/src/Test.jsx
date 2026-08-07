import { useState } from "react";

function Test() {
  const [count, setCount] = useState({
    name: "Yash",
    number: 0,
  });

  // Wrong: this mutates the existing object and returns the same reference
  const increaseWrong = () => {
    setCount((prev) => {
      prev.number += 1;
      console.log(count);
      return prev;
    });
  };

  // Correct: create a new object so React can detect the change
  const increaseCorrect = () => {
    setCount((prev) =>
      (() => {
        console.log(prev);
        return {
          ...prev,
          number: prev.number + 1,
        };
      })()
    );
    // console.log(count)
  };

  return (
    <>
      <h1>{count.name}</h1>
      <p>Count: {count.number}</p>

      <button onClick={increaseWrong}>Wrong update</button>
      <button onClick={increaseCorrect}>Correct update</button>
    </>
  );
}

export default Test;
