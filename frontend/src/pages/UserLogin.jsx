import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-100 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-100 opacity-30 rounded-full blur-3xl -z-10"></div>

      {/* Login Form */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg w-full max-w-lg mx-auto z-20">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Cabify
          </h1>
        </header>

        <form onSubmit={submitHandler}>
          <h2 className="text-xl font-medium text-gray-800 mb-6 text-center">
            Welcome Back!
          </h2>
          <p className="text-gray-600 mb-6 text-center text-base">
            Log in to continue your journey with us.
          </p>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-base font-medium mb-2">
              Email Address
            </label>
            <input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              type="email"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-base font-medium mb-2"
            >
              Password
            </label>
            <input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-pink-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105">
            Login
          </button>

          <p className="text-center mt-6 text-base text-gray-600">
            New here?{" "}
            <Link
              to="/signup"
              className="text-pink-600 font-medium hover:text-pink-700"
            >
              Create an Account
            </Link>
          </p>
        </form>

        {/* Captain Login Link */}
        <div className="mt-6 text-center">
          <Link
            to="/captain-login"
            className="inline-block bg-green-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Sign in as Captain
          </Link>

           <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
