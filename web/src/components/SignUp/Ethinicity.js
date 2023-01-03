import React, { useState } from "react";
import ethiImg from "../images/ethi.png";
import { Link } from "react-router-dom";

const Ethinicity = () => {
  const [option, setOption] = useState("");
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll max-sm:h-screen">
      <div>
        <img
          src={ethiImg}
          alt="logo"
          className="w-96 max-sm:h-28 max-sm:w-32 max-sm:mt-14 max-sm:mb-10"
        />
      </div>
      <div className="w-96 h-3/4 rounded shadow-lg bg-white text-center sm:h-aut max-sm:h-auto max-sm:pb-4 grid">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-60 mx-auto">
          Which ethinicity’s are you opento dating?
        </h3>
        <p className="text-sm text-gray-400 pt-2">(Select all that apply)</p>

        <div className="mt-8 overflow-y-scroll">
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            American or Indian Native
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Asian
          </p>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            name="Korean"
            id="Korean"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none pl-3"
          >
            <option value="Korean">Korean</option>
            <option value="NorthKorean">North Korean</option>
            <option value="SouthKorean">South Korean</option>
          </select>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Chinese
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Malaysian
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Filipino
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Japanese
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Vietnamese
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Native Hawaiian
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            African
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            African American
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Middle Eastern
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            European
          </p>
          <p className="w-80 mb-3 rounded-md p-1 bg-gray-100  mx-auto text-left pl-3">
            Other
          </p>
        </div>

        <div className="mt-16 lg:pb-5 max-sm:py-6">
          <Link to="/words-describe">
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

export default Ethinicity;
