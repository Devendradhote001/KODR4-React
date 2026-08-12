import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersData")) || []
  );
  const [updateUserData, setUpdateUserData] = useState(null);

  console.log("app", updateUserData);

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
          {usersData.map((val) => (
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
