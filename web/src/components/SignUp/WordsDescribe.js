import React from "react";
import wordImg from "../images/words.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const WordsDescribe = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div>
        <img
          src={wordImg}
          alt="logo"
          className="h-60 w-auto max-sm:h-20 max-sm:w-32 max-sm:mt-10"
        />
      </div>
      <div className="w-96 h-auto rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4 max-sm:mt-5">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif  pb-5">
          Words That Describes you
        </h3>
        <div>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Loyal
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Charismatic
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Kind
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Talkative <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Shy
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Honest <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Funny
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Ambitious
            <AiFillCheckCircle className="text-xl" />
          </p>
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Family oriented
          </p>
        </div>
        <div className="mt-16 lg:pb-5 max-sm:py-6">
          <Link to="/features">
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

export default WordsDescribe;
