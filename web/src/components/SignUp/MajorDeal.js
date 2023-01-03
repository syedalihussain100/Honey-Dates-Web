import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const MajorDeal = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg bg-white h-auto w-96">
        <div className="flex items-center justify-center">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg text-[#1C1C1C] font-serif pt-4 pb-2">
            Major Deal Breakers
          </h3>
          <textarea
            placeholder="Type here"
            className="bg-gray-100 w-80 focus:outline-none resize-none h-36 placeholder:text-sm placeholder:p-2 placeholder:text-[#1C1C1C]"
          />
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg text-[#1C1C1C] font-serif pt-4 pb-2">
            Major Deal Makers
          </h3>
          <textarea
            placeholder="Type here"
            className="bg-gray-100 w-80 focus:outline-none resize-none h-36 placeholder:text-sm placeholder:p-2 placeholder:text-[#1C1C1C]"
          />
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center pt-3 pb-10">
          <div className="mt-4">
            <Link to="/reference-number">
              <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                Skip
              </button>
            </Link>
            <Link to="/what-open">
              <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
                Continue
              </button>
            </Link>
          </div>
          <p className="text-xs mt-2 text-[#1C1C1C] pb-4">
            By continue you agree our{" "}
            <span className="underline cursor-pointer">Terms </span>
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

export default MajorDeal;
