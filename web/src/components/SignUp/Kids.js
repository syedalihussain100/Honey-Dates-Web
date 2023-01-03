import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Kids = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="w-96 h-4/5 rounded overflow-hidden shadow-lg bg-white mx-auto text-center mt-12">
        <div>
          <h3 className="font-bold text-xl text-[#1C1C1C] mb-6 font-serif	">
            Do you Want Kids
          </h3>
          <div className="flex flex-col  items-center">
            <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left">
              I want children
            </p>
            <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm flex justify-between items-center">
              I have children
              <AiFillCheckCircle />
            </p>
            <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left">
              Have kids, open to having more
            </p>
            <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left">
              I don’t ever want children
            </p>
            <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left">
              I want to adopt children
            </p>
          </div>
        </div>
        <div className="absolute bottom-28 text-center ml-14 ">
          <Link to="/public">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm">
              Continue
            </button>
          </Link>
          <p className="text-xs mt-2 text-[#1C1C1C]">
            By continue you agree our <span className="underline">Terms</span>{" "}
            and
            <span className="underline ml-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;
