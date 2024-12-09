import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 via-green-100 to-green-200">
      <div className="w-full max-w-lg bg-white rounded-3xl p-10 space-y-8 shadow-xl">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Cabify Captain
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Log in to begin your professional Captain journey.
          </p>
        </header>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 bg-gray-100 transition-all"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 bg-gray-100 transition-all"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-base text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/captain-signup"
            className="text-green-600 font-medium hover:text-green-700"
          >
            Register as a Captain
          </Link>
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400 text-gray-800 font-medium py-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-orange-600"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
