import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Email = () => {
  const [email, setEmail] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <div className="text-center mt-16">
        <h3 className="font-bold text-xl text-[#1C1C1C]">What’s your email</h3>
        <p className="text-sm mt-2">Enter an active email</p>
      </div>
      <div className="text-center">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={ref}
          type="email"
          placeholder="Enter email"
          className="focus:outline-none  border-b-2 border-[#E6E6E6] placeholder-gray-300 placeholder:font-normal placeholder:text-xs mt-12 w-60"
        />
      </div>
      <div className="absolute bottom-20 text-center right-1/3 left-1/3 max-sm:mx-auto">
        <Link to="/notification">
          <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:w-full">
            Continue
          </button>
        </Link>
        <p className="text-xs mt-2 text-[#1C1C1C]">
          By continue you agree our <span className="underline">Terms</span> and
          <span className="underline ml-1">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Email;
