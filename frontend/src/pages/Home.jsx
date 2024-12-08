import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1618066433976-58f19b08b01d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

        {/* Header */}
        <header className="relative z-10 pt-8 px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Cabify
          </h1>
        </header>

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 w-full bg-white shadow-2xl py-8 px-6 sm:px-10 md:px-16 rounded-t-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Get started with Cabify
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Discover the easiest way to travel with style and comfort. Join us
            today to unlock your next journey.
          </p>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
