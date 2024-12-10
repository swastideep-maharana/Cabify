import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName,
        lastName,
      },
      email,
      password,
    });
    console.log(userData);

    // Mock API response handling
    const response = { status: 201, data: { user: {}, token: "sampleToken" } };
    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-teal-200 to-cyan-300 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-100 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 opacity-30 rounded-full blur-3xl -z-10"></div>

      {/* Signup Form */}
      <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg w-full max-w-lg mx-auto z-20">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Cabify
          </h1>
        </header>

        <form onSubmit={submitHandler}>
          <h2 className="text-xl font-medium text-gray-800 mb-4 text-center">
            Create an Account
          </h2>
          <p className="text-gray-600 mb-6 text-center text-sm">
            Sign up to join our community and explore your journey with us.
          </p>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Full Name
            </label>
            <div className="flex gap-4">
              <input
                required
                className="w-1/2 bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="w-1/2 bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Email Address
            </label>
            <input
              required
              className="w-full bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Password
            </label>
            <input
              required
              className="w-full bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-teal-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 font-medium hover:text-teal-700">
              Login
            </Link>
          </p>
        </form>

        <div className="mt-4 text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
