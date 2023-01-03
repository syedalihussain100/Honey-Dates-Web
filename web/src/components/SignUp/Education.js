import React from "react";
import educationImg from "../images/education.png";
import { AiFillCheckCircle } from "react-icons/ai";
import {Link} from "react-router-dom"

const Education = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col">
      <div>
        <img src={educationImg} alt="logo" className="h-60 w-80 max-sm:h-24 max-sm:w-24" />
      </div>
      <div className="w-96 h-3/4 rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 text-center">
          What is your education?
        </h3>
        <div className="flex flex-col items-center mt-3">
          <p className="flex items-center justify-between bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            High School <AiFillCheckCircle className="text-xl"/>
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Some College
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Bachaleors
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Master
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Trade School
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Graduate
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Other
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Prefer not say
          </p>
        </div>
        <div className="mt-2 lg:pb-5">
          <Link to="/type-relation">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:max-w-md">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
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
  );
};

export default Education;
