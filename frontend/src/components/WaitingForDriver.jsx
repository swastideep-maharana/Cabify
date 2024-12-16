import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div className="relative bg-gradient-to-t from-blue-100 to-blue-300 p-6 rounded-lg shadow-xl">
      {/* Close Button */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line hover:text-gray-500 transition-colors cursor-pointer"></i>
      </h5>

      {/* Ride Information */}
      <div className="flex items-center justify-between mt-5">
        <img
          className="h-12 rounded-lg shadow-lg"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Ride"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium capitalize text-indigo-700">
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1 text-indigo-600">
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          <h1 className="text-lg font-semibold text-indigo-800">
            {props.ride?.otp}
          </h1>
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex gap-2 justify-between flex-col items-center mt-6">
        <div className="w-full space-y-3">
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-indigo-300 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="ri-map-pin-user-fill text-green-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>

          {/* Destination Location */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-indigo-300 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="text-lg ri-map-pin-2-fill text-blue-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
            </div>
          </div>

          {/* Fare Information */}
          <div className="flex items-center gap-5 p-3 hover:bg-indigo-50 rounded-lg transition-all">
            <i className="ri-currency-line text-yellow-500"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
