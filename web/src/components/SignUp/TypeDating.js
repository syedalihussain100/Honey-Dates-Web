import React from "react";
import { Link } from "react-router-dom";
import eb1 from "../images/eb1.png";
import eb2 from "../images/eg1.png";
import ev from "../images/ev.png";

const TypeDating = () => {
  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="flex relative">
        <img src={ev} alt="logo" className="h-72 w-auto max-sm:hidden" />
        <img src={eb1} alt="logo" className="absolute h-64 w-auto" />
        <img
          src={eb2}
          alt="logo"
          className="h-72 w-60 absolute -right-28 top-32 "
        />
      </div>
      <div className="flex flex-col shadow-lg h-auto w-96 bg-white">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 w-72 mx-auto text-center mb-5">
          Select the built type you would be open to dating?
        </h3>

        <div>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
            Athletic/Fit
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
            BBW
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
          curvy
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
          Mascular
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
          Slender
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
          Petite
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
          Curvy
          </p>
        </div>
        <div className="mt-16 lg:pb-5 max-sm:py-6 mx-auto">
          <Link to="/reference-number">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:w-full">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
            By continue you agree our
            <span className="underline cursor-pointer"> Terms </span>
            and
            <span className="underline ml-1 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypeDating;
