import React, { useState, useRef, useEffect } from "react";
import heightImg from "../images/height.png";
import { AiOutlineSync } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeightRange = () => {
  const [minheight, setMinHeight] = useState("");
  const [maxheight, setMaxHeight] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll">
      <div>
        <img
          src={heightImg}
          alt="logo"
          className="h-96 w-auto max-sm:h-40 max-sm:w-40 max-sm:mt-5 max-sm:mb-5"
        />
      </div>
      <div className="flex flex-col shadow-lg h-3/4 w-96">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 w-72 mx-auto text-center mb-5">
          Select the height Range you would be open to dating?
        </h3>
        <div className="flex justify-evenly pb-3">
          <p>Enter min Height</p>
          <div className="flex items-center">
            <AiOutlineSync className="text-gray-400" />
            <span className="ml-1 text-gray-400">Inches</span>
          </div>
        </div>

        <input
          ref={ref}
          value={minheight}
          onChange={(e) => setMinHeight(e.target.value)}
          type="text"
          placeholder="Enter min Height"
          className="w-80 focus:outline-none bg-gray-100 rounded-md p-2 placeholder:text-sm mx-auto"
        />

        {/*  */}

        <div className="flex flex-col mt-5">
          <div className="flex justify-evenly pb-3">
            <p>Enter max Height</p>
            <div className="flex items-center">
              <AiOutlineSync className="text-gray-400" />
              <span className="ml-1 text-gray-400">Inches</span>
            </div>
          </div>

          <input
            value={maxheight}
            onChange={(e) => setMaxHeight(e.target.value)}
            type="text"
            placeholder="Enter max Height"
            className="w-80 focus:outline-none bg-gray-100 rounded-md p-2 placeholder:text-sm mx-auto"
          />
        </div>
        {/*  */}
        <div className="text-center mt-36">
          <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
            Skip
          </button>

          <Link to="/builder">
            <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs py-4">
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

export default HeightRange;
