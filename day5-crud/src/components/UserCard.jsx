import React from "react";

const UserCard = ({ user, deleteUser, setToggle, setUpdatedData }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold uppercase text-indigo-600 shadow">
            {user?.name?.firstname?.charAt(0)}
            {user?.name?.lastname?.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-bold capitalize">
              {user?.name?.firstname} {user?.name?.lastname}
            </h2>

            <p className="text-sm text-indigo-100">@{user?.username}</p>
          </div>
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-4 p-6">
        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-indigo-100 p-2">✉️</div>

          <div>
            <p className="text-xs font-medium text-gray-400">Email</p>
            <p className="text-sm font-medium text-gray-700">{user?.email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-green-100 p-2">📞</div>

          <div>
            <p className="text-xs font-medium text-gray-400">Phone</p>
            <p className="text-sm font-medium text-gray-700">{user?.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-orange-100 p-2">📍</div>

          <div>
            <p className="text-xs font-medium text-gray-400">Address</p>

            <p className="text-sm font-medium capitalize text-gray-700">
              {user?.address?.number}, {user?.address?.street},{" "}
              {user?.address?.city}
            </p>

            <p className="text-xs text-gray-400">{user?.address?.zipcode}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 border-t border-gray-100 px-6 py-4">
        <button
          onClick={() => {
            setUpdatedData(user);
            setToggle(true);
          }}
          className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Update
        </button>

        <button
          onClick={() => deleteUser(user.id)}
          className="flex-1 rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
