import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const LongestRelationShip = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-auto w-96 shadow-lg bg-white">
        <div className="flex flex-col items-center justify-center mb-5 max-sm:mt-10">
         <div className="flex items-center">
         <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
         </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-80 text-center">
              What is the longest relationship you have had?
            </h3>
            <div className="mt-3">
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                None
              </p>
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                Few days
              </p>
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                Few Months
              </p>
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                1 year
              </p>
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                2 year
              </p>
              <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left pl-4">
                3 year +
              </p>
            </div>
            {/* four */}
            <div className="flex flex-col justify-center items-center pt-3 pb-10">
              <div className="mt-4">
                <Link to="/what-open">
                  <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                    Skip
                  </button>
                </Link>
                <Link to="/next-relationship">
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
    </div>
  );
};

export default LongestRelationShip;
