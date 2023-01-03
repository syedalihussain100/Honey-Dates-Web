import React, { useState, useRef, useEffect } from "react";
import frame from "../images/frame.png";
import { Link } from "react-router-dom";

const Name = () => {
  const [name, setName] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex flex-col  h-screen relative">
      <img src={frame} alt="frame" className="h-36 w-56 mx-auto mt-4" />
      <div className="text-center mt-6">
        <h3 className="font-bold text-xl text-[#1C1C1C] mt-2">
          What’s your name
        </h3>
        <p className="text-xs text-[#000000] mt-1 font-normal">
          Please enter the 5-digit code sent to
        </p>
      </div>
      <div className="text-center mt-10">
        <input
          className="focus:outline-none w-60  border-b-2 border-[#E6E6E6] placeholder-gray-300 placeholder:font-normal placeholder:text-xs"
          value={name}
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => setName(e.target.value)}
          ref={ref}
        />
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link to="/born">
          <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm text-center max-sm:w-full">
            Continue
          </button>
        </Link>
        <p className="text-xs mt-2 text-[#1C1C1C] text-center max-sm:text-center">
          By continue you agree our <span className="underline">Terms</span> and
          <span className="underline ml-1"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Name;
