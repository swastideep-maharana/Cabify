import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";

const Captainhome = () => {
  return (
    <div className="h-screen">
      {/* Home Button */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <header className="absolute left-5 top-5">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight shadow-md">
            Cabify
          </h1>
        </header>
        <Link
          to="/home"
          className="fixed right-4 top-4 h-12 w-12 bg-white shadow-lg flex items-center justify-center rounded-full z-10 hover:shadow-xl transition-transform transform hover:scale-105"
        >
          <i class="ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5 p-6">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Background"
        />
      </div>

      {/* Top Section with Image */}
      <div className="h-2/5 p-6">
          <CaptainDetails />
      </div>
    </div>
  );
};

export default Captainhome;
