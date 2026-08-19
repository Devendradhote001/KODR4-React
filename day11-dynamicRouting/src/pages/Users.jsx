import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllUsersApi } from "../api/usersApi";

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  let getAllUsersData = async () => {
    let data = await getAllUsersApi();
    setUsersData(data);
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {usersData?.map((val) => (
        <h1 key={val.id}>{val.username}</h1>
      ))}
    </div>
  );
};

export default Users;
