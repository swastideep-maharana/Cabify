import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = (props) => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  // GSAP animation for finish ride panel
  useGSAP(
    () => {
      gsap.to(finishRidePanelRef.current, {
        transform: finishRidePanel ? "translateY(0)" : "translateY(100%)",
        duration: 0.5, // Adjust the duration for smoothness
        ease: "power3.out", // Apply easing for smooth animation
      });
    },
    [finishRidePanel] // Re-run when the finishRidePanel state changes
  );

  const handleCompleteRide = () => {
    setFinishRidePanel(true); // Trigger the panel to show
  };

  return (
    <div className="h-screen relative">
      {/* Transparent Header Section */}
      <div className="fixed w-full p-4 top-0 bg-transparent z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-indigo-700 tracking-tight">
            Cabify
          </h1>
          <Link
            to="/home"
            className="h-12 w-12 bg-indigo-600 text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <i className="ri-logout-box-r-line text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="h-4/5 p-6">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Cab Background"
        />
      </div>

      {/* Captain Details Section */}
      <div
        className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative"
        onClick={handleCompleteRide} // Trigger the panel on click
      >
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">
          Complete Ride
        </button>
      </div>

      {/* Finish Ride Panel */}
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-6 py-6 rounded-t-3xl shadow-lg"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
