import React from "react";
import { Link } from "react-router-dom";
import dietImg from "../images/diet.png";

const WhichDiet = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll">
      <div>
        <img
          src={dietImg}
          alt="logo"
          className="h-80 w-auto max-sm:h-20 max-sm:w-24 max-sm:mt-10"
        />
      </div>
      <div className="w-96 h-auto rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4 max-sm:mt-5">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-7 text-center w-72 mx-auto">
          Which diets are you open to having partner follow? 
        </h3>
        <p className="text-sm text-gray-400 pt-2">(Select all that apply)</p>

        <div className="flex flex-col items-center mt-5">
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Vegetarian{" "}
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Pescatarian{" "}
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Very healthy
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Semi Healthy
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Non-GMO Only
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            Organic Only
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
            I love to eat Everything
          </p>
          <p className="bg-[#f9f9f9] mb-3 p-2 text-left text-sm w-80 rounded">
          No Preferance
          </p>
        </div>
        <div className="pb-10">
          <Link to="/favourite-food">
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

export default WhichDiet;
