import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ email: email, password: password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 -z-10"></div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide text-center mt-5">
          Cabify
        </h1>
      </header>

      {/* Login Form */}
      <form
        onSubmit={submitHandler}
        className="bg-white rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Log in to continue your journey with us.
        </p>
        <div className="mb-5">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email Address
          </label>
          <input
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Password
          </label>
          <input
            required
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
          Login
        </button>
        <p className="text-center mt-4 text-gray-600">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Create an Account
          </Link>
        </p>
      </form>

      {/* Captain Login */}
      <div className="mt-6 text-center">
        <Link
          to="/captain-login"
          className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
