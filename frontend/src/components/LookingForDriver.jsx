import React from "react";

const LookingForDriver = (props) => {
  return (
    <div className="relative bg-gradient-to-t from-indigo-100 to-indigo-300 p-6 rounded-lg shadow-lg">
      {/* Close Button */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line hover:text-gray-500 transition-colors cursor-pointer"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-indigo-600 text-center">Looking for a Driver</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        {/* Ride Image */}
        <img
          className="h-20 rounded-lg shadow-xl border-4 border-indigo-400 transform transition-transform duration-300 hover:scale-105"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Ride"
        />
        
        {/* Ride Details */}
        <div className="w-full mt-5 space-y-3">
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="ri-map-pin-user-fill text-green-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">{props.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.pickup}</p>
            </div>
          </div>

          {/* Destination Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="text-lg ri-map-pin-2-fill text-blue-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">{props.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
            </div>
          </div>

          {/* Fare Information */}
          <div className="flex items-center gap-5 p-3 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="ri-currency-line text-yellow-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                ₹{props.fare[props.vehicleType]}{" "}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
