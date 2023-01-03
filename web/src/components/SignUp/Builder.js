import React from "react";
import builderBoyImg from "../images/builderboy.png";
import builderGirlImg from "../images/buildergirl.png";
import { Link } from "react-router-dom";

const Builder = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll">
      <div className="flex ">
        <img src={builderBoyImg} alt="logo" className="h-80 w-48 max-sm:h-28 max-sm:w-32 max-sm:mt-10 max-sm:mb-10" />
        <img src={builderGirlImg} alt="logo" className="h-80 w-48 max-sm:h-28 max-sm:w-32 max-sm:mt-10 max-sm:mb-10" />
      </div>
      <div className="flex flex-col shadow-lg h-auto w-96">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif  mx-auto ">
          Your Built Type
        </h3>
        <p className="text-gray-400 text-center">
          (Select all boxes that apply)
        </p>
        <div className="mt-5">
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
          <Link to="/type-dating">
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

export default Builder;
