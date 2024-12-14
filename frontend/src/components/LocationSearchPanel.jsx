import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const locations = [
    "Street: 2, Mauli Apt, Manpada Rd, Opp Gavdevi Mandir, Dombivli (east)",
    "Street: 2, Mauli Apt, Manpada Rd, Opp Gavdevi Mandir, Dombivli (east)",
    "Street: Opp St Bus Depo, Behind Francis Church, Panvel, Navi Mumbai",
    "Street: 37, Poes Road, Teynampet",
  ];

  return (
    <div className="p-2">
      {locations.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(true);
          }}
          className="flex gap-2 border-2 border-gray-200 rounded-lg my-1 p-2 items-center justify-start hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer"
        >
          <div className="bg-gradient-to-r from-pink-200 via-indigo-200 to-teal-200 p-2 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-2-fill text-black text-lg"></i>{" "}
            {/* Icon Color Changed to Black */}
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-sm text-gray-700">{elem}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
// import React from 'react'

// const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if (activeField === 'pickup') {
//             setPickup(suggestion)
//         } else if (activeField === 'destination') {
//             setDestination(suggestion)
//         }
//     }

//     return (
//         <div>
//             {
//                 suggestions?.map((elem, idx) => (
//                     <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                         <h4 className='font-medium'>{elem}</h4>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default LocationSearchPanel
