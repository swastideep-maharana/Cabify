import React from "react";

const CaptainDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {/* Captain Info Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover border-2 border-indigo-500"
            src="https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg"
            alt="Captain"
          />
          <h4 className="text-2xl font-semibold text-indigo-800">Harsh Patel</h4>
        </div>
        <div className="text-right">
          <h4 className="text-2xl font-bold text-indigo-600">₹295</h4>
          <p className="text-sm font-medium text-gray-500">Earned</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex p-4 bg-indigo-50 rounded-xl justify-between gap-6">
        <div className="text-center flex-1">
          <i className="text-3xl mb-2 font-thin ri-time-line text-indigo-600"></i>
          <h5 className="text-xl font-medium text-indigo-800">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center flex-1">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line text-indigo-600"></i>
          <h5 className="text-xl font-medium text-indigo-800">10.2</h5>
          <p className="text-sm text-gray-600">Rides Completed</p>
        </div>
        <div className="text-center flex-1">
          <i className="text-3xl mb-2 font-thin ri-booklet-line text-indigo-600"></i>
          <h5 className="text-xl font-medium text-indigo-800">10.2</h5>
          <p className="text-sm text-gray-600">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
