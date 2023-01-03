import React from 'react';
import Eyehave from "../images/Eyehave.png";
import { Link } from "react-router-dom";

const YourPartnerHave = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col max-sm:overflow-y-scroll ">
    <div>
      <img
        src={Eyehave}
        alt="logo"
        className="h-auto w-64 max-sm:h-24 max-sm:w-24 max-sm:overflow-y-scroll max-sm:mt-5 max-sm:mb-5"
      />
    </div>

    <div className="shadow-lg bg-white h-auto w-96">
      <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-72 text-center mx-auto mt-4">
      What color of eye do you want your partner to have?
      </h3>
      <div>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
        amber
        </p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
        blue
        </p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
        brown
        </p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
        gray
        </p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
        green
        </p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">hazel</p>
        <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">red</p>
      </div>

      <div className="flex flex-col items-center mt-10 py-5">
        <Link to="/success-profile">
          <button className="bg-[#FFDE59] w-60 py-2">Continue</button>
        </Link>
        <p className="text-xs mt-2">
          By continue you agree our <span className="underline">Terms</span>{" "}
          and <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default YourPartnerHave