import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-xl h-full w-full max-w-full flex flex-col">
      <h5
        className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer p-2"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-4xl ri-arrow-down-circle-line text-black hover:text-gray-700"></i>
      </h5>
      <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Confirm Your Ride
      </h3>

      {/* Ride Details */}
      <div className="flex flex-col space-y-6">
        {/* Ride Info */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <img
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-200"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt="Ride Image"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-semibold text-xl text-gray-900">
              CabifyGo{" "}
              <span className="text-sm text-gray-500">
                <i className="ri-user-3-fill"></i> 4
              </span>
            </h4>
            <p className="text-xs text-gray-500">2 mins away</p>
            <p className="text-sm text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">₹193.20</h2>
        </div>

        {/* Pickup Address */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-map-pin-user-fill text-blue-600"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
            <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
          </div>
        </div>

        {/* Dropoff Address */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-map-pin-2-fill text-blue-600"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">562/11-A</h3>
            <p className="text-sm text-gray-600">Kankariya Talb, Bhopal</p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <i className="text-xl ri-currency-fill text-blue-600"></i>
          <div>
            <h3 className="text-lg font-medium text-gray-900">₹193.20</h3>
            <p className="text-sm text-gray-600">Cash Payment</p>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => {
          props.setVehicleFound(true);
          props.setConfirmRidePanel(false);
        }}
        className="w-full mt-6 bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition-all"
      >
        Confirm Ride
      </button>
    </div>
  );
};

export default ConfirmedRide;
