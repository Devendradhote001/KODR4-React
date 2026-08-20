import React from "react";

const Home = ({ greet }) => {
  greet();
  console.log("home rendering...");
  return (
    <div>
      <h1>I am Home</h1>
    </div>
  );
};

export default React.memo(Home, (prevProp, nextProp) => {
  console.log(nextProp);
  return prevProp.user.age === nextProp.user.age;
});
