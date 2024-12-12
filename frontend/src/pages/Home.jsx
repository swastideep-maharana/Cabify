import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  // GSAP effect for opening/closing the panel
  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%", // Panel height
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

  // GSAP effect for vehicle panel
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.in",
        });
      }
    },
    [vehiclePanel]
  );

  const handleFocus = () => {
    setPanelOpen(true); // Open the panel when either of the inputs is focused
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <header className="absolute left-5 top-5">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
          Cabify
        </h1>
      </header>

      <main
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="h-screen w-screen"
      >
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Background"
        />
      </main>

      <section className="bg-white flex flex-col justify-end absolute bottom-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className={`absolute right-6 top-6 text-2xl cursor-pointer ${
              panelOpen ? "opacity-1" : "opacity-0"
            }`}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onFocus={handleFocus}
              className="bg-gray-200 px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onFocus={handleFocus}
              className="bg-gray-200 px-8 py-2 text-base rounded-lg w-full mt-5"
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

      {/* Vehicle selection panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <h5
          className="p-1 text-center absolute top-0 w-full "
          onClick={() => {
            setVehiclePanel(false);
          }}
        >
          <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt="CabifyGo"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              CabifyGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
            <p>Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Moto"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-normal text-xs text-gray-600">3 mins away</h5>
            <p>Affordable Motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹65.17</h2>
        </div>
        <div className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Auto"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-lg">
              Auto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-normal text-xs text-gray-600">2 mins away</h5>
            <p>Affordable Auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹118.1</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
