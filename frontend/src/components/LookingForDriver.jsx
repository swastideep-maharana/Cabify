import React from "react";

const LookingForDriver = (props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 rounded-lg shadow-xl h-full w-full max-w-full flex flex-col">
      <h5
        className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer p-2"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-4xl ri-arrow-down-circle-line text-black hover:text-gray-700"></i>
      </h5>
      <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">Looking for a Driver</h3>

      <div className="flex flex-col space-y-6">
        {/* Driver Details */}
        <div className="flex bg-white rounded-2xl p-4 items-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
          <img
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-200"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt="Driver"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-semibold text-xl text-gray-900">Driver Name</h4>
            <p className="text-sm text-gray-600">Available for ride</p>
          </div>
        </div>

        {/* Pickup and Drop Details */}
        <div className="flex flex-col bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talb, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talb, Bhopal</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
