import React from "react";
import { Link } from "react-router-dom";
import colorGirlImg from "../images/colorgirl.png";


const ColorPartnerHave = () => {
  return (
    <div className="flex justify-evenly items-center h-screen max-sm:flex-col">
      <div>
        <img
          src={colorGirlImg}
          alt="logo"
          className="h-auto w-64 max-sm:h-24 max-sm:w-24 max-sm:overflow-y-scroll"
        />
      </div>

      <div className="shadow-lg bg-white h-3/4 w-96">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-64 text-center mx-auto mt-4">
        Which hair color do you want your partner have?
        </h3>
        <div>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            Black
          </p>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            Brown
          </p>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            Grey
          </p>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            blond
          </p>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            White
          </p>
          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">red</p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <Link to="/length-have">
            <button className="bg-[#FFDE59] w-60 py-2">Continue</button>
          </Link>
          <p className="text-xs mt-2">
            By continue you agree our <span className="underline">Terms</span>{" "}
            and <span className="underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPartnerHave;
