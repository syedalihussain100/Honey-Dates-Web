import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const TypeRelation = () => {
  const [option, setOption] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <div className="w-96 h-4/5 rounded overflow-hidden shadow-lg bg-white mx-auto text-center grid">
        <h3 className="w-72 mx-auto font-bold text-xl text-[#1C1C1C] font-serif">
          What type of relationship you are looking for?
        </h3>
        <p className="text-sm text-gray-400">(select all that apply)</p>

        <div className="mt-5 overflow-y-scroll">
          <p className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 mx-auto text-left">
            Platonic Relationship <AiFillCheckCircle className="text-xl" />
          </p>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            name="Polymerous"
            id="Polymerous"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Polymerous">
              Polymerous <AiFillCheckCircle className="text-xl" />
            </option>
            <option value="female">Open</option>
            <option value="straight">Closed</option>
          </select>

          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left">
            Monogamous
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            Open relationship
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            One night stand
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            Regular FWB
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            Life partner
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            Short term relationship
          </p>
          <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
            Long term relationship
          </p>

          <h4 className="font-bold text-lg">Throuple options</h4>

          <div className="mt-4">
            <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
              Long term relationship
            </p>
            <p className="w-80 mb-3  rounded-md p-1 bg-gray-100  mx-auto text-left">
              Long term relationship
            </p>
          </div>
        </div>
        <div className="mt-16 lg:pb-5 max-sm:py-6">
          <Link to="/your-religion">
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

export default TypeRelation;
