import React from "react";

const UserCard = ({ user, setToggle, setUpdateUserData }) => {
  return (
    <div className="border p-3 border-black">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button
        onClick={() => {
          setUpdateUserData(user);
          setToggle(true);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UserCard;
