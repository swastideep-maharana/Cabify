import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  const locations = [
    "Street:  2, Mauli Apt, Manpada Rd, Opp Gavdevi Mandir, Dombivli (east)",
    "Street:  2, Mauli Apt, Manpada Rd, Opp Gavdevi Mandir, Dombivli (east)",
    "Street:  Opp St Bus Depo, Behind Francis Church, Panvel, Navi Mumbai",
    "Street:  37, Poes Road, Teynampet",
  ];

  return (
    <div>
      {locations.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(true);
          }}
          className="flex gap-4 border-2 border-gray-100 active:border-black my-2 rounded-xl items-center justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
