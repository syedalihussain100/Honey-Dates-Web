import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

const Photos = () => {
  return (
    <div className="shadow-lg bg-white w-1/3 mx-auto max-sm:w-full max-md:w-full  max-sm:overflow-y-scroll max-sm:h-screen">
      <div className="grid justify-center mt-4">
        <div className="grid justify-center mt-3">
          <h3 className="font-bold text-xl text-[#1C1C1C] font-serif text-center">
            Add photos
          </h3>
          <p className="text-sm text-gray-400 text-center">
            Add minimum 4 photos
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-2 gap-x-2 mt-8 max-2xl:grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-2 max-sm:mx-auto">
          <div className="w-32 h-40 bg-gray-100 ">
            <div className="grid justify-center items-center h-full">
              <AiFillCamera
                className="text-gray-400 cursor-pointer"
                onClick={() => alert("Hello Photo")}
              />
            </div>
          </div>
          <div className="w-32 h-40 bg-gray-100">
            <div className="grid justify-center items-center h-full">
              <AiFillCamera className="text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="w-32 h-40 bg-gray-100">
            <div className="grid justify-center items-center h-full">
              <AiFillCamera className="text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="w-32 h-40 bg-gray-100">
            <div className="grid justify-center items-center h-full">
              <AiFillCamera className="text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div className="w-32 h-40 bg-gray-100">
            <div className="grid justify-center items-center h-full">
              <AiFillCamera className="text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* third part */}
        <div className="grid justify-center mt-10 max-sm:justify-center ">
          <Link to="/smoke">
            <button className="bg-[#FFDE59] p-2 w-60 text-sm rounded max-sm:w-full">
              Continue
            </button>
          </Link>
          <p className="text-xs text-center mt-2 pb-4 text-[#1C1C1C] min-[984px]:text-xs">
            By continue you agree our <span className="underline">Terms </span>
            and
            <span className="underline ml-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photos;
