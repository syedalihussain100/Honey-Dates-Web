import React from "react";
import Piano1 from "../images/Piano.png";
import Piano2 from "../images/Piano.png";
import Piano3 from "../images/Piano.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Music = () => {
  return (
    <div className="flex justify-around items-center relative text-center md:flex-col lg:flex-row sm:flex-col max-[635px]:flex-col">
      <div>
        <div>
          <img
            src={Piano1}
            alt="pic"
            className="h-32 w-60 absolute left-96 top-2 lg:block md:hidden sm:hidden max-sm:hidden"
          />
        </div>
        <div>
          <img
            src={Piano2}
            alt="pic"
            className="h-40 w-1/3 absolute top-48 left-40 lg:block md:hidden sm:hidden max-sm:hidden"
          />
        </div>
        <div>
          <img
            src={Piano3}
            alt="pic"
            className="h-32 w-56 absolute left-20 bottom-20 lg:block md:hidden sm:hidden max-sm:hidden"
          />
        </div>
      </div>
      {/* part2 */}
      <div className="w-96 h-3/6 mt-6 rounded overflow-hidden shadow-lg bg-white text-center">
        <div>
          <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-72 mx-auto mt-2">
            What type of music do you like to listen too?
          </h3>
          <p className="text-sm text-gray-400 mb-4">(selectall that apply)</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded">
            Country
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm flex justify-between items-center rounded">
            Hip Hop <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Classical{" "}
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Electric
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Rock
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            International Music
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Ethnic Music
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Rap
          </p>
          <p className="bg-[#f9f9f9] mb-2 p-2 w-80 text-sm text-left rounded text-[#1C1C1C]">
            Etc
          </p>
        </div>
        {/* part 3 */}
        <div>
          <div className="mt-4">
            <Link to="/vote">
              <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                Skip
              </button>
            </Link>
            <Link to="/vote">
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

export default Music;
