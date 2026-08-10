import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, updatedData, users, setUsers, setUpdatedData }) => {
  console.log(updatedData);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: updatedData.name.firstname,
      email: updatedData.email,
      phone: updatedData.phone,
    },
  });

  let formSubmit = (data) => {
    if (updatedData) {
      //   let user = users.find((user) => user.id === updatedData.id);
      //   user.name.firstname = data.name;
      //   user.email = data.email;
      //   user.phone = data.phone;
      //   setUsers([...users]);
      //   setToggle(false);
      //   setUpdatedData(null);

      let newData = {
        name: {
          firstname: data.name,
        },
        email: data.email,
        phone: data.phone,
      };

      setUsers((prev) => {
        let prevData = prev.map((user) => {
          return user.id === updatedData.id
            ? {
                ...user,
                ...newData,
              }
            : user;
        });
        console.log(prevData);
        return prevData;
      });

      setToggle(false);
      setUpdatedData(null);
    } else {
      // new wala logic
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-gray-900">Create User</h2>

          <p className="mt-1 text-sm text-gray-500">
            Add a new user to your application
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email id required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone
            </label>

            <input
              {...register("phone", {
                required: "Mobile is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter valid Mobile number",
                },
                minLength: {
                  value: 10,
                  message: "10 digits are required",
                },
                maxLength: {
                  value: 10,
                  message: "maximum 10 digits are required",
                },
              })}
              type="text"
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              onClick={() => setToggle(false)}
              type="button"
              className="flex-1 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
