import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      {" "}
      <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => {
            props.setVehicleFound(false);
          }}
        >
          {" "}
          <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

        <div className="flex gap-2 justify-between items-center flex-col">
          <img
            className="h-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc1aAZzBJjW2GhT0TquUROYNGjc-8j6cSNeafEQAIpAOFJPXdwH_DrnzTOVen5HoFDRc&usqp=CAU"
            alt=""
          />
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talb, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talb, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
              <i className="text-lg ri-currency-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
