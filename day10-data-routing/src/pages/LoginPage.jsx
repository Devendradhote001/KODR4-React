import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 
              outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-transparent transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 
            hover:bg-blue-700 text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Don't have an account?</p>

          <button className="mt-2 text-blue-600 font-semibold hover:text-blue-700">
            Register here
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
