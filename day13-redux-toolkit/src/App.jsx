import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./reducers/counterReducer";

const App = () => {
  let inpRef = useRef(null);
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>Count is {count}</h1>
      <input ref={inpRef} type="text" placeholder="enter value" />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button
        onClick={() => {
          dispatch(incrementByValue(100));
        }}
      >
        Increment by value
      </button>
    </div>
  );
};

export default App;
