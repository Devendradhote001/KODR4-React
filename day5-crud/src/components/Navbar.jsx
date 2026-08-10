import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gray-500">
      <h1 className="">Logo</h1>
      <div className="flex gap-6">
        <p>Home</p>
        <p>About</p>
      </div>
      <button
        onClick={() => setToggle(true)}
        className="px-6 rounded cursor-pointer border-0 py-2 bg-blue-700 text-white"
      >
        Create user
      </button>
    </div>
  );
};

export default Navbar;
