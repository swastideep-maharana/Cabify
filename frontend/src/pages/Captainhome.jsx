import React, { useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const Captainhome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmridePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = React.useRef(null);
  const confirmridePopupPanelRef = React.useRef(null);

  React.useLayoutEffect(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [ridePopupPanel]);

  React.useLayoutEffect(() => {
    if (confirmridePopupPanel) {
      gsap.to(confirmridePopupPanelRef.current, {
        transform: "translateY(0)",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(confirmridePopupPanelRef.current, {
        transform: "translateY(100%)",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [confirmridePopupPanel]);

  return (
    <div className="h-screen bg-gray-100">
      {/* Transparent Header Section with Logo and Logout Button */}
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
      <div className="h-3/5 p-6">
        <img
          className="h-full w-full object-cover rounded-xl shadow-lg"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Cab Background"
        />
      </div>

      {/* Captain Details Section */}
      <div className="h-2/5 p-6 bg-white rounded-xl shadow-md mb-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup Section */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-6 py-6 rounded-t-3xl shadow-lg"
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      {/* Confirm Ride Popup Section */}
      <div
        ref={confirmridePopupPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-6 py-6 rounded-t-3xl shadow-lg"
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default Captainhome;
