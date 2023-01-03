import React from "react";
import cupDrugImg from "../images/cupdrug.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const CupDrugs = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div>
        <img
          src={cupDrugImg}
          alt="logo"
          className="w-96 h-72 max-sm:h-32 max-sm:w-40"
        />
      </div>
      <div className="w-96 h-3/4 rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4">
          Do you use Drugs?
        </h3>
        <div className="mt-4 flex flex-col items-center ">
          <p className="flex items-center justify-between bg-[#f9f9f9] mb-2 p-2 text-sm w-80">
            Never
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Sometime
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Socially
          </p>
          <p className="flex justify-between bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Regularly <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Heavily
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Prefer not say
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Trying to quit
          </p>
        </div>
        {/* three */}
        <div className="mt-5 lg:pb-5">
          <Link to="/instagram">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:max-w-md">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
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

export default CupDrugs;
