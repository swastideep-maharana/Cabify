import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHander = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopupPanel(false);
      props.setRidePopupPanel(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-indigo-100 text-gray-900 rounded-lg shadow-lg relative">
      {/* Close Button */}
      <h5
        className="absolute top-2 right-2 cursor-pointer text-2xl text-gray-600 hover:text-gray-400"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="ri-arrow-down-circle-line"></i>
      </h5>

      {/* Header */}
      <h3 className="text-2xl font-semibold mb-5 text-center text-gray-800">
        Confirm Ride
      </h3>

      {/* User Info */}
      <div className="flex items-center justify-between p-4 border-2 border-yellow-300 rounded-lg mt-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt="User"
          />
          <h2 className="text-lg font-medium capitalize text-gray-800">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold text-yellow-500">2.2 KM</h5>
      </div>

      {/* Ride Details */}
      <div className="w-full mt-5 space-y-3">
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <i className="ri-map-pin-user-fill text-blue-600"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {props.ride?.pickup}
            </h3>
            <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <i className="ri-map-pin-2-fill text-green-600"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {props.ride?.destination}
            </h3>
            <p className="text-sm text-gray-600">{props.ride?.destination}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <i className="ri-currency-line text-yellow-500"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              ₹{props.ride?.fare}
            </h3>
            <p className="text-sm text-gray-600">Cash Payment</p>
          </div>
        </div>
      </div>

      {/* OTP Input and Buttons */}
      <div className="mt-6 w-full">
        <form onSubmit={submitHander}>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            className="bg-gray-100 px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter OTP"
          />

          {/* Confirm Button */}
          <button className="w-full mt-5 text-lg flex justify-center bg-gradient-to-r from-green-300 to-green-500 text-white font-semibold p-3 rounded-lg hover:from-green-400 hover:to-green-600 transition-all">
            Confirm
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
