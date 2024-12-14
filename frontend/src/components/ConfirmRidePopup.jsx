import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 bg-opacity-70 bg-gray-900 flex justify-center items-center z-50">
      <div className="w-full h-full bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-xl p-6 flex flex-col justify-between">
        {/* Close Button (Arrow Icon) */}
        <h5
          className="absolute top-4 right-4 cursor-pointer p-2 hover:text-gray-700 transition-all"
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
        >
          <i className="text-4xl ri-arrow-down-circle-line text-black"></i>
        </h5>

        {/* Title */}
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Confirm this Ride to Start
        </h3>

        {/* Ride Info */}
        <div className="flex items-center justify-between bg-yellow-400 rounded-lg p-4 mb-6 shadow-lg">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
          />
          <div className="ml-4 flex flex-col">
            <h2 className="text-xl font-medium text-gray-900">Harsh Patel</h2>
            <p className="text-sm text-gray-700">Driver</p>
          </div>
          <h5 className="text-lg font-semibold text-gray-800">2.2 KM</h5>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col space-y-4 mb-6">
          {/* Pickup Address */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-map-pin-user-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
            </div>
          </div>

          {/* Dropoff Address */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-map-pin-2-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
              <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="flex bg-white rounded-2xl p-4 items-center shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
            <i className="text-xl ri-currency-fill text-blue-600 mr-4"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-900">₹193.20</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-4 flex flex-col justify-center items-center">
          {/* Confirm Button */}
          <form
            onSubmit={(e) => {
              sumbmitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-gray-100 font-mono px-6 mt-2 py-4 text-base rounded-lg w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter OTP"
            />
            <Link
              to="/captain-riding"
              className="w-full max-w-md h-12 bg-green-600 mt-2 text-white font-semibold flex items-center justify-center rounded-lg hover:bg-green-700 transition-all shadow-xl focus:ring-4 focus:ring-green-300 focus:outline-none"
            >
              Confirm
            </Link>

            {/* Cancel Button */}
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full max-w-md mt-2 h-12 bg-red-500 text-white font-semibold flex items-center justify-center rounded-lg hover:bg-red-600 transition-all shadow-xl focus:ring-4 focus:ring-red-300 focus:outline-none"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
