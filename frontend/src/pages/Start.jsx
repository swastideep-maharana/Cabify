import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618066433976-58f19b08b01d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Working Image URL
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

        {/* Header */}
        <header className="relative z-10 pt-24 px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider mb-4">
            Cabify
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seamless, stylish, and comfortable journeys. Explore your world with
            a touch of class.
          </p>
        </header>

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 w-full bg-white shadow-2xl py-10 px-8 sm:px-12 md:px-16 rounded-t-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Get started with Cabify
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Join the movement and unlock a new way of traveling. Get started
            now.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
           
          </div>

          <div className="flex justify-center">
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out text-xl"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
