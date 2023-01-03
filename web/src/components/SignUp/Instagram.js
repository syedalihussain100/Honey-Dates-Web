import React, { useState, useEffect, useRef } from "react";
import InstaLogoImg from "../images/instalogo.png";
import InstaManImg from "../images/Instagram.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Instagram = () => {
  const [insta, setInsta] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div className="relative">
        <img
          src={InstaLogoImg}
          alt="logo"
          className="absolute h-10 w-10 -right-5 top-32 max-sm:hidden"
        />
        <img
          src={InstaManImg}
          alt="logo"
          className="w-80 h-96 max-sm:h-24 max-sm:w-24"
        />
      </div>
      <div className="w-96 h-3/4 rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 w-60 mx-auto">
          Do you want to connect your instagram?
        </h3>

        {/* Two */}
        <div className="relative mt-5">
          <div className="absolute inset-y-0 right-12 flex items-center pl-3 pointer-events-none">
            <AiFillCheckCircle />
          </div>
          <input
            ref={ref}
            value={insta}
            type="search"
            className="block mx-auto w-80 mb-3 focus:outline-none bg-gray-100 rounded-md p-2 placeholder:text-sm placeholder:text-black"
            placeholder="Enter username."
            onChange={(e) => setInsta(e.target.value)}
          />
          {/* <button type="submit" class=" ">Search</button> */}
        </div>

        {/* three */}

        <div className="mt-72">
          <Link to="/cup-drugs">
            <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
              Skip
            </button>
          </Link>
          <Link to="/occupations">
            <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
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

export default Instagram;
