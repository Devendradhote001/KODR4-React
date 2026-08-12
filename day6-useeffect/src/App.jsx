import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [productsData, setProductsData] = useState([]);
  console.log(productsData);
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || []
  );
  const [updateUserData, setUpdateUserData] = useState(null);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <nav>
        <button onClick={() => setToggle((prev) => !prev)}>Open form</button>
      </nav>

      {toggle ? (
        <Form
          updateUserData={updateUserData}
          setToggle={setToggle}
          usersData={usersData}
          setUsersData={setUsersData}
        />
      ) : (
        <div className="flex flex-col gap-5">
          {productsData.map((val) => (
            <UserCard
              key={val.id}
              setToggle={setToggle}
              user={val}
              setUpdateUserData={setUpdateUserData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
