import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CapatainContext";

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);

  if (!captain || !captain.fullname) {
    return (
      <div className="flex justify-center items-center h-full p-6">
        <p className="text-lg text-gray-500">Loading captain details...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
      {/* Profile Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full object-cover border-2 border-gray-300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt="Profile"
          />
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 capitalize">
              {`${captain.fullname.firstname || ""} ${captain.fullname.lastname || ""}`}
            </h4>
            <p className="text-sm text-gray-500">Captain</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-2xl font-semibold text-gray-800">₹295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl shadow-md text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-2-line text-blue-500"></i>
          <h5 className="text-lg font-medium text-gray-800">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-md text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line text-green-500"></i>
          <h5 className="text-lg font-medium text-gray-800">10.2</h5>
          <p className="text-sm text-gray-600">Speed</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-md text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line text-purple-500"></i>
          <h5 className="text-lg font-medium text-gray-800">10.2</h5>
          <p className="text-sm text-gray-600">Reports</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
