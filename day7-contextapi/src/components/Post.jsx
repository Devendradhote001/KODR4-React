import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Post = () => {
  let data = useContext(MyStore);
  console.log(data);

  return (
    <div>
      <h1>Post comp</h1>
    </div>
  );
};

export default Post;
