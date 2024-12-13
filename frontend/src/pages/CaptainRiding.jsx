import React from "react";
import { Link } from "react-router-dom";

const CaptainRiding = () => {
  return (
    <div className="h-screen relative">
      {/* Transparent Header Section with Logo and Logout Button */}
      <div className="fixed w-full p-4 top-0 bg-transparent z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-indigo-700 tracking-tight">
            Cabify
          </h1>
          <Link
            to="/home"
            className="h-12 w-12 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <i className="ri-logout-box-r-line text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="h-4/5 p-6">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Cab Background"
        />
      </div>

      {/* Captain Details Section */}
      <div className="h-1/5 p-6 bg-yellow-400 flex relative items-center justify-between">
        <h5
          className="absolute top-4 right-4 cursor-pointer p-2 hover:text-gray-700 transition-all"
          onClick={() => {}}
        >
          <i className="text-4xl ri-arrow-down-circle-line text-black hover:text-gray-700"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="  bg-green-600 text-white font-semibold p-3 rounded-lg">
          Complete Ride
        </button>
      </div>
    </div>
  );
};

export default CaptainRiding;
