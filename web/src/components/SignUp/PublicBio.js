import React, { useState, useRef, useEffect } from "react";
import laptopImg from "../images/laptop.png";
import { Link } from "react-router-dom";

const PublicBio = () => {
  const [input, setInput] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex justify-evenly items-center h-screen relative text-center md:flex-col lg:flex-row sm:flex-col max-[635px]:flex-col">
      <div>
        <img
          src={laptopImg}
          alt="laptop"
          className="h-96 w-96 sm:w-32 sm:h-32 sm:mt-2 lg:h-72 lg:w-72 max-[635px]:w-28 max-[635px]:h-28 max-[635px]:mt-2 min-[990px]:h-24 min-[990px]:w-24 min-[984px]:h-20 min-[984px]:w-20 min-[390px]:h-16 min-[390px]:w-16 "
        />
      </div>
      <div className="w-96 h-3/4 mt-4 rounded overflow-hidden shadow-lg bg-white">
        <div>
          <h3 className="font-bold text-xl text-[#1C1C1C]">Public Bio</h3>
          <p className="text-sm mb-5 text-gray-400">200 (Characters)</p>
        </div>
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={ref}
            className="bg-gray-100 w-80 focus:outline-none resize-none h-60 placeholder:text-sm placeholder:p-2 placeholder:text-[#1C1C1C]"
            placeholder="Type here"
          />
        </div>
        <div className="absolute lg:bottom-28  text-center ml-14 sm:bottom-10  max-[635px]:bottom-10 ">
        <Link to="/not-public">
        <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm  max-[635px]:w-full min-[984px]:w-full">
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

export default PublicBio;
