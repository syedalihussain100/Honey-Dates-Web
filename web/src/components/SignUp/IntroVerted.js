import React from "react";
import personImg from "../images/2person.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const IntroVerted = () => {
  return (
    <div className="flex justify-around items-center h-screen relative max-sm:flex-col max-md:flex-col">
      {/* part 1 */}
      <div>
        <img
          src={personImg}
          alt="logo"
          className="h-60 w-96 max-sm:h-20 max-sm:w-36 max-md:h-28 max-md:w-40"
        />
      </div>

      {/* part2 */}
      <div className="h-auto w-96 rounded shadow-lg bg-white text-center">
        <div>
          <h3 className="font-bold text-lg text-[#1C1C1C] font-serif w-72 mx-auto mt-10 max-sm:mt-2">
            Are you introverted or extroverted?
          </h3>
        </div>
        <div className="flex flex-col items-center mt-10">
          <p className="flex items-center justify-between bg-[#f9f9f9] mb-2 p-2 text-sm w-80">
            Introvert
            <AiFillCheckCircle className="text-xl" />
          </p>
          <p className=" bg-[#f9f9f9] mb-2 p-2 text-sm w-80 text-left">
            Extrovert
          </p>
        </div>

        <div className="mx-auto mt-40 pb-10">
          <Link to="/selectallapply">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:w-60 ">
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

export default IntroVerted;
