import React from "react";
import mapImg from "../images/map.png";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
        <div>
          <h3 className="font-bold text-xl text-[#1C1C1C] w-72 mx-auto text-center">
            Allow ‘Dates & Honey’ to use your location
          </h3>
        </div>
        <p className="text-sm text-center w-72 mx-auto mt-2 text-gray-400">
          We will use your location to find people nearby you.
        </p>
        <div>
          <img className="w-full mt-1 mb-2 object-cover" src={mapImg} alt="Map" />
        </div>
        <div className="text-center">
          <p className="mb-4 pb-2 border-b-2 text-[#2A3182] cursor-pointer text-sm">
            Allow Once
          </p>
          <Link to="/identify">
            <p className="mb-4 pb-2 border-b-2 text-[#2A3182] cursor-pointer text-sm">
              Allow while using the app
            </p>
          </Link>
          <p className="mb-2 text-[#2A3182] cursor-pointer text-sm">Don’t Allow</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
