import { createContext, useState } from "react";

export let MyStore = createContext();

console.log("mystore->", MyStore);

export let ContextProvider = ({ children }) => {
  const [data, setData] = useState("good morning..");
  let count = 90;

  return (
    <MyStore.Provider value={{ data, count }}>{children}</MyStore.Provider>
  );
};
