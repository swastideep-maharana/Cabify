import React from "react";

const VehiclePanel = (props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 rounded-lg shadow-xl h-full w-full max-w-full flex flex-col">
      <h5
        className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer p-2"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-4xl ri-arrow-down-circle-line text-black hover:text-gray-700"></i>
      </h5>
      <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">Choose Your Vehicle</h3>

      {/* Vehicle Items */}
      <div className="flex flex-col space-y-6">
        {/* CabifyGo */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        >
          <img
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-200"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt="CabifyGo"
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

        {/* Moto */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        >
          <img
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-200"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Moto"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-semibold text-xl text-gray-900">
              Moto{" "}
              <span className="text-sm text-gray-500">
                <i className="ri-user-3-fill"></i> 1
              </span>
            </h4>
            <p className="text-xs text-gray-500">3 mins away</p>
            <p className="text-sm text-gray-600">Affordable Motorcycle rides</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">₹65.17</h2>
        </div>

        {/* Auto */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
        >
          <img
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-200"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Auto"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-semibold text-xl text-gray-900">
              Auto{" "}
              <span className="text-sm text-gray-500">
                <i className="ri-user-3-fill"></i> 3
              </span>
            </h4>
            <p className="text-xs text-gray-500">2 mins away</p>
            <p className="text-sm text-gray-600">Affordable Auto rides</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">₹118.1</h2>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
