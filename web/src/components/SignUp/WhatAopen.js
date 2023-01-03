import React from "react";
import { AiOutlineExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const WhatAopen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg bg-white h-3/4 w-1/3 rounded grid max-sm:w-full max-sm:h-full">
        <div className="flex items-center justify-center mb-5 max-sm:mt-10">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <div className="flex flex-col justify-center items-center overflow-y-scroll max-sm:-mt-36 max-sm:z-10">
          <h3 className="font-bold text-xl text-[#1C1C1C] font-serif mt-48">
            What are you open to?
          </h3>
          {/* one */}
          <div className="h-52 w-96 bg-white shadow-lg rounded mt-5">
            <div className="flex items-center justify-around bg-gray-100 py-3">
              <p className="w-60 font-bold">
                Someone to build Everything with (career wise/business and
                personal life)
              </p>
              <AiFillCheckCircle className="text-2xl" />
            </div>
            {/*  */}
            <div className="mt-4">
              <p className="mb-6 pl-3">Is Educated</p>
              <p className="pl-3">Is Not Educated</p>
            </div>
          </div>
          {/* two */}
          <div className="h-52 w-96 bg-white shadow-lg rounded mt-5">
            <div className="flex items-center justify-around bg-gray-100 py-3">
              <p className="w-48 font-bold">Someone that is already well off</p>
              <AiFillCheckCircle className="text-2xl" />
            </div>
            {/*  */}
            <div className="mt-4">
              <p className="mb-6 pl-3">Is Educated</p>
              <p className="pl-3">Is Not Educated</p>
            </div>
          </div>
          {/* three */}
          <div className="flex items-center justify-around bg-gray-100 py-3 mt-4 w-96">
            <p className=" font-bold w-60">
              I’m open to anything other things are more important to me
            </p>
            <AiFillCheckCircle className="text-2xl" />
          </div>
          {/* four */}
          <div className="flex flex-col justify-center items-center pt-3 pb-10">
            <div className="mt-4">
              <Link to="/major-deal">
                <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                  Skip
                </button>
              </Link>
              <Link to="/longest-relationship">
                <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
                  Continue
                </button>
              </Link>
            </div>
            <p className="text-xs mt-2 text-[#1C1C1C] pb-4">
              By continue you agree our
              <span className="underline cursor-pointer">Terms </span>
              and
              <span className="underline ml-1 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAopen;
