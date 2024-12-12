import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const ConfirmedRidePanelRef = useRef(null);
  const vehiclefoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: "20px",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: "0px",
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [panelOpen]);

  const handlePanelAnimation = (ref, isOpen) => {
    gsap.to(ref.current, {
      transform: isOpen ? "translateY(0)" : "translateY(100%)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(
    () => handlePanelAnimation(vehiclePanelRef, vehiclePanel),
    [vehiclePanel]
  );
  useEffect(
    () => handlePanelAnimation(ConfirmedRidePanelRef, confirmRidePanel),
    [confirmRidePanel]
  );
  useEffect(
    () => handlePanelAnimation(vehiclefoundRef, vehicleFound),
    [vehicleFound]
  );
  useEffect(
    () => handlePanelAnimation(waitingForDriverRef, waitingForDriver),
    [waitingForDriver]
  );

  const handleFocus = () => {
    setPanelOpen(true);
  };

  return (
    <div className="h-screen relative overflow-hidden font-sans bg-gray-50">
      <header className="absolute left-5 top-5">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight shadow-md">
          Cabify
        </h1>
      </header>

      <main
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="h-screen w-screen relative"
      >
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Background"
        />
      </main>

      <section className="absolute bottom-0 w-full">
        <div className="h-[30%] p-6 bg-white rounded-t-3xl shadow-lg relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className={`absolute right-6 top-6 text-2xl cursor-pointer transition-opacity duration-300 ${
              panelOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <i className="ri-arrow-down-s-line text-gray-600"></i>
          </h5>
          <h4 className="text-3xl font-semibold text-gray-800 mb-4">
            Find a trip
          </h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onFocus={handleFocus}
              className="bg-gray-100 px-8 py-2 text-base rounded-lg w-full mb-4 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={handleFocus}
              className="bg-gray-100 px-8 py-2 text-base rounded-lg w-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="overflow-hidden bg-white opacity-0 h-0">
          {panelOpen && (
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
          )}
        </div>
      </section>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-6 pt-10 rounded-t-3xl shadow-lg"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      <div
        ref={ConfirmedRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-6 pt-10 rounded-t-3xl shadow-lg"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehiclefoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-6 pt-10 rounded-t-3xl shadow-lg"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-4 py-6 pt-10 rounded-t-3xl shadow-lg"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
