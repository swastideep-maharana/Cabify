import React from "react";
import { Link } from "react-router-dom";

const FinishRide = ({ setFinishRidePanel, driver, pickup, dropoff, fare }) => {
  return (
    <div className="fixed inset-0 bg-opacity-70 bg-gray-900 flex justify-center items-center z-50">
      <div className="w-full h-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-xl p-6 flex flex-col justify-between">
        {/* Close Button (Arrow Icon) */}
        <h5
          className="absolute top-4 right-4 cursor-pointer p-2 hover:text-gray-700 transition-all"
          onClick={() => {
            setFinishRidePanel(false);
          }}
          aria-label="Close"
        >
          <i className="text-4xl ri-arrow-down-circle-line text-black"></i>
        </h5>

        {/* Title */}
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Finish this Ride
        </h3>

        {/* Ride Info */}
        <div className="flex items-center justify-between bg-yellow-400 rounded-lg p-4 mb-6 shadow-lg">
          <img
            className="h-16 w-16 rounded-full object-cover"
            alt={`${driver?.name}'s Profile`}
          />
          <div className="ml-4 flex flex-col">
            <h2 className="text-xl font-medium text-gray-900">
              {driver?.name}
            </h2>
            <p className="text-sm text-gray-700">{driver?.role}</p>
          </div>
          <h5 className="text-lg font-semibold text-gray-800">
            {driver?.distance} KM
          </h5>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col space-y-4 mb-6">
          {/* Pickup Address */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-map-pin-user-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {pickup?.address}
              </h3>
              <p className="text-sm text-gray-600">{pickup?.details}</p>
            </div>
          </div>

          {/* Dropoff Address */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-map-pin-2-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {dropoff?.address}
              </h3>
              <p className="text-sm text-gray-600">{dropoff?.details}</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-currency-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                ₹{fare?.amount}
              </h3>
              <p className="text-sm text-gray-600">{fare?.method}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-4 flex flex-col justify-center items-center">
          {/* Confirm Button */}
          <Link
            to="/captain-home"
            className="w-full max-w-md h-12 bg-green-600 mt-2 text-white font-semibold flex items-center justify-center rounded-lg hover:bg-green-700 transition-all shadow-xl focus:ring-4 focus:ring-green-300 focus:outline-none"
          >
            Complete Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
