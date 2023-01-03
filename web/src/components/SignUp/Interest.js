import React from "react";
import interestImg from "../images/interest.png";
import {
  AiFillPlusCircle,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Interest = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div>
        <img
          src={interestImg}
          alt="logo"
          className="h-80 w-96 max-sm:h-32 max-sm:w-40"
        />
      </div>
      <div className="w-96 h-3/4 rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 text-center">
          What are your interests?
        </h3>
        <span className="text-gray-400">(Maximum 10)</span>

        <div className="relative mt-3">
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
        {/* two */}

        <div className="mt-2 ml-8">
          <div className=" w-28 p-1 rounded-full mb-2 py-2 bg-[#FFDE59]">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Soccer</p>
              <AiOutlineClose className="ml-1 cursor-pointer" />
            </div>
          </div>

          <div className=" w-32 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Dog lover</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
          <div className=" w-40 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Movie Watcher</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
          <div className=" w-32 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Football</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
          <div className=" w-32 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Dog lover</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
          <div className=" w-40 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Movie Watcher</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
          <div className=" w-32 p-1 border rounded-full mb-2 py-2">
            <div className="flex items-center ml-2">
              <p className="text-sm"># Football</p>
              <AiOutlinePlus className="ml-1 cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <Link to="/education">
            <button className="bg-[#FFDE59] w-80 py-2">Continue</button>
          </Link>
          <p className="text-xs mt-1">
            By continue you agree our Terms and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
