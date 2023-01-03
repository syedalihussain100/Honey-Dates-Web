import React, { useState, useRef, useEffect } from "react";
import occupationImg from "../images/Occupation.png";
import {
  AiFillPlusCircle,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Occupations = () => {
  const [companyName, setCompanyName] = useState("");
  const ref = useRef(null);

  //   ref refresh
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div>
        <img
          src={occupationImg}
          alt="logo"
          className="h-96 w-96 max-sm:h-32 max-sm:w-40"
        />
      </div>

      <div className="w-96 h-3/4 rounded shadow-lg bg-white grid">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 text-center">
          Occupations
        </h3>
        <div className="overflow-y-scroll">
          {/* one */}
          <div className="flex flex-col mt-5">
            <label className="text-xs text-gray-400 ml-8 mb-2">
              (Optional)
            </label>
            <input
              ref={ref}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-80 focus:outline-none bg-gray-100 rounded-md p-2 placeholder:text-sm mx-auto"
              placeholder="Company name or type"
            />
          </div>
          {/* two */}
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <div className="absolute -right-12 flex items-center pl-3 pointer-events-none">
                  <AiOutlineSearch className="text-xl" />
                </div>
              </div>
              <input
                type="text"
                id="default-search"
                className="block w-80 p-2 pl-10 focus:outline-none bg-gray-100 rounded-md placeholder:text-sm mx-auto "
                placeholder="Type of Company"
                required
              />
              <AiFillPlusCircle className="absolute right-11 bottom-2.5 text-xl cursor-pointer" />
            </div>
          </div>
          {/* three */}

          <div className="relative ml-8 mt-2">
            <div className="flex items-center bg-[#FFDE59] w-32 p-2 rounded-full mb-2 py-2">
              <p className="text-sm"># Agricultural</p>
              <AiOutlineClose className="ml-1 cursor-pointer" />
            </div>

            <div className=" w-40 p-1 border rounded-full mb-2 py-2">
              <div className="flex items-center ml-2">
                <p className="text-sm"># Social Media</p>
                <AiOutlinePlus className="ml-1 cursor-pointer" />
              </div>
            </div>

            <div className=" w-32 p-1 border rounded-full mb-2 py-2">
              <div className="flex items-center ml-2">
                <p># Business</p>
                <AiOutlinePlus className="ml-1 cursor-pointer" />
              </div>
            </div>

            <div className="w-48 border p-1 rounded-full py-2">
              <div className="flex items-center ml-2">
                <p># Personal Business</p>
                <AiOutlinePlus className="ml-1 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="relative mt-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className="absolute -right-12 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch className="text-xl" />
              </div>
            </div>
            <input
              type="text"
              id="default-search"
              className="block w-80 p-2 pl-10 focus:outline-none bg-gray-100 rounded-md placeholder:text-sm mx-auto placeholder:text-black"
              placeholder="Position in Company"
              required
            />
            <AiFillPlusCircle className="absolute right-11 bottom-2.5 text-xl cursor-pointer" />
          </div>

          <div className="ml-8 mt-3">
            <div className="bg-[#FFDE59] w-24 p-2 rounded-full mb-2 py-2">
              <div className="flex items-center ml-2">
                <p className="text-sm"># CEO</p>
                <AiOutlineClose className="ml-1 cursor-pointer" />
              </div>
            </div>

            <div className="w-28 p-1 border rounded-full mb-2 py-2">
              <div className="flex items-center ml-2">
                <p className="text-sm"># Worker</p>
                <AiOutlinePlus className="ml-1 cursor-pointer" />
              </div>
            </div>

            <div className=" w-32 p-1 border rounded-full mb-2 py-2">
              <div className="flex items-center ml-2">
                <p className="text-sm"># Resources</p>
                <AiOutlinePlus className="ml-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="text-center mt-5">
          <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
            Skip
          </button>

          <Link to="/interest">
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

export default Occupations;
