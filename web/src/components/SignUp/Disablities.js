import React from "react";
import disaImg from "../images/disa.png";
import { AiFillCheckCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Disablities = () => {
  return (
    <div className="flex items-center justify-evenly h-screen max-sm:flex-col max-sm:overflow-y-scroll">
      <div>
        <img
          src={disaImg}
          alt="logo"
          className="h-60 max-sm:h-28 max-sm:w-36 max-sm:mt-24"
        />
      </div>
      <div className="w-96 h-auto rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4 max-sm:mt-5">
        <div className="flex items-center justify-center">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 w-72 mx-auto">
          Are you open to dating with someone with disabilities?
        </h3>
        <p className="text-gray-400">(Select all that appply)</p>
        <div className="shadow-lg bg-[#FDFDFD] mt-4 w-80 mx-auto">
          <p className="flex items-center justify-between text-left bg-gray-100 py-2  font-bold pl-4 rounded">
            Yes <AiFillCheckCircle className="text-xl mr-3" />
          </p>
          <input
            placeholder="Explain Please ________"
            className="flex flex-col justify-items-start py-2 rounded placeholder:text-black pl-3 w-full focus:outline-none"
          />
        </div>
        <p className="flex items-center justify-between text-left bg-gray-100 py-2  font-bold pl-4 rounded w-80 mx-auto mt-5">
          Yes <AiFillCheckCircle className="text-xl mr-3" />
        </p>

        <div className="mt-60 lg:pb-5 max-sm:py-6">
          <Link to="/height">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:max-w-md">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
            By continue you agree our
            <span className="underline cursor-pointer"> Terms </span>
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

export default Disablities;
