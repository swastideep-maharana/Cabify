import React from "react";

const RidePopup = (props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-xl h-full w-full max-w-full flex flex-col relative">
      {/* Close Button (Arrow Icon) positioned in the top-right corner */}
      <h5
        className="absolute top-4 right-4 cursor-pointer p-2 hover:text-gray-700 transition-all"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-4xl ri-arrow-down-circle-line text-black hover:text-gray-700"></i>
      </h5>

      <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
        New Ride Available!
      </h3>

      {/* Ride Info */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-6">
        <div className="flex items-center">
          <img
            className="h-14 w-14 rounded-full object-cover mr-4"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-medium text-gray-900">Harsh Patel</h2>
            <p className="text-sm text-gray-600">Driver</p>
          </div>
        </div>
        <h5 className="text-lg font-semibold text-gray-900">2.2 KM</h5>
      </div>

      {/* Ride Details */}
      <div className="flex flex-col space-y-4">
        {/* Pickup Address */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-map-pin-user-fill text-blue-600 mr-4"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
            <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
          </div>
        </div>

        {/* Dropoff Address */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-map-pin-2-fill text-blue-600 mr-4"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
            <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-currency-fill text-blue-600 mr-4"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">₹193.20</h3>
            <p className="text-sm text-gray-600">Cash Payment</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-2">
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition-all shadow-md transform hover:scale-105"
        >
          Accept Ride
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-full bg-gray-300 text-black font-semibold p-3 rounded-lg hover:bg-gray-400 transition-all shadow-md transform hover:scale-105"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopup;
