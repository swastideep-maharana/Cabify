import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Home Button */}
      <Link
        to="/home"
        className="fixed right-4 top-4 h-12 w-12 bg-white shadow-lg flex items-center justify-center rounded-full z-10 hover:shadow-xl transition-transform transform hover:scale-105"
      >
        <i className="text-2xl text-gray-700 ri-home-6-fill"></i>
      </Link>

      {/* Top Section with Image */}
      <div className="h-1/2 p-4">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Background"
        />
      </div>

      {/* Bottom Section */}
      <div className="h-1/2 bg-gray-50 p-6 rounded-t-2xl shadow-inner flex flex-col justify-between">
        {/* Driver Details */}
        <div className="flex items-center justify-between mb-4">
          <img
            className="h-14 w-14 rounded-full object-cover shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt="Driver"
          />
          <div className="text-right">
            <h2 className="text-xl font-semibold text-gray-800">Sarthak</h2>
            <h4 className="text-lg font-medium text-gray-700">MP04 AB 132</h4>
            <p className="text-sm text-gray-500">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
            <i className="text-xl text-green-600 ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
              <p className="text-sm text-gray-500">Kankariya Talb, Bhopal</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
            <i className="text-xl text-blue-600 ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">&#8377;193.20</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full mt-6 bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
