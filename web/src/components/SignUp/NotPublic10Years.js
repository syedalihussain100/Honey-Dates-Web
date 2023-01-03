import React, { useState, useRef, useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotPublic10Years = () => {
  const [input, setInput] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="relative flex flex-col h-screen mt-12">
      <div className="w-96 h-3/4 mt-4 rounded overflow-hidden shadow-lg bg-white mx-auto text-center">
        <div className="flex items-center justify-center">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <div className="mt-4 w-60 mx-auto">
          <p className="font-bold">
            Where do you see yourself professionally and personally in ten
            years?
          </p>
        </div>
        <div>
          <textarea
            ref={ref}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-100 mt-4 h-60 w-80 focus:outline-none resize-none placeholder:text-sm placeholder:p-2 placeholder:text-[#1C1C1C]"
            placeholder="Type here"
          />
        </div>
        <div className="absolute  text-center ml-14 lg:bottom-40">
          <Link to="/music">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm md:w-full">
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

export default NotPublic10Years;
