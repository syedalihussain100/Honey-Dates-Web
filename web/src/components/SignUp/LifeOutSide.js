import React from "react";
import { AiOutlineExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const LifeOutSide = () => {
  return (
    <div className="flex justify-center items-center h-screen max-sm:overflow-y-scroll">
      <div className="h-auto w-96 shadow-lg bg-white">
        <div className="flex items-center justify-center pt-5">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif text-center pt-3">
          In life/outside are you the decision maker in the home?
        </h3>

        <div className="flex  justify-between items-center bg-gray-100 py-5 w-80 mx-auto rounded mt-4">
          <p className="w-56 pl-3">
            Submissive ( your partner can call all the shot)
          </p>
          <AiFillCheckCircle className="text-2xl mr-3" />
        </div>
        <div className="bg-gray-100 py-5 w-80 mx-auto mt-4 rounded">
          <p className="w-48 pl-3">Dominant (you call all the shots only)</p>
        </div>
        <p className="bg-gray-100 py-3 w-80 mx-auto rounded mt-4 pl-3">
          Switch
        </p>
        {/*  */}
        <div className="flex flex-col justify-center items-center pt-32 pb-10">
          <div className="mt-4">
            <Link to="/bed-you">
              <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                Skip
              </button>
            </Link>
            <Link to="/clingy-you">
              <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
                Continue
              </button>
            </Link>
          </div>
          <p className="text-xs mt-2 text-[#1C1C1C] pb-4">
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

export default LifeOutSide;
