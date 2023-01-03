import React from "react";
import VoteImg from "../images/vote.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const PoliticalDating = () => {
  return (
    <div className="flex justify-evenly items-center relative h-screen lg:flex-row md:flex-col sm:flex-col max-sm:flex-col">
      <div>
        <img
          src={VoteImg}
          alt="vote"
          className="lg:h-60 lg:w-60 max-sm:h-20 max-sm:w-20 md:h-40 md:w-40 sm:h-40 sm:w-40"
        />
      </div>
      <div className="w-96 h-auto rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4">
        <div>
          <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-72 mx-auto mt-10">
            Which Political views are you okay with dating?
          </h3>
          <p className="text-sm text-gray-400">(selectall that apply)</p>
        </div>
        <div className="mt-4 flex flex-col items-center ">
          <p className="flex items-center justify-between bg-[#f9f9f9] mb-2 p-2 text-sm w-80">
            Any <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Conservative
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Liberal
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Libertarians
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            No Political
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Middle of the Road
          </p>
        </div>
        <div className="mt-5 lg:pb-5">
          <Link to="/introverted">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:max-w-md">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
            By continue you agree our <span className="underline">Terms </span>
            and
            <span className="underline ml-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticalDating;
