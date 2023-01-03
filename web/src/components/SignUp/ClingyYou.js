import React, { useState, useRef, useEffect } from "react";
import { AiOutlineExclamationCircle, AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ClingyYou = () => {
  const [input, setInput] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg bg-white h-auto w-96">
        <div className="flex items-center justify-center pt-5">
          <AiOutlineExclamationCircle className="bg-[#2A3182] text-white rounded-full " />
          <h3 className="text-sm ml-2">Response is Not Public</h3>
        </div>
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif text-center pt-3">
          Are You Clingy
        </h3>

        <div>
          <div className="bg-gray-100 py-3 flex justify-between items-center w-80 mx-auto mt-3 rounded">
            <p className="w-56 pl-3">
              Very I like to stay with my partner 24/7 even go to work together
              if possible
            </p>
            <AiFillCheckCircle className="text-xl mr-2" />
          </div>

          <p className="py-2 bg-gray-100 w-80 mx-auto mt-3 pl-3 rounded">
            I am not clingy at all
          </p>

          <div className="flex flex-col mt-3">
            <label className="pl-9 text-sm mb-2">Other</label>
            <input
              ref={ref}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write here"
              type="text"
              className="w-80 mx-auto placeholder:text-sm py-2 focus:outline-none rounded-md bg-gray-100 placeholder:pl-3"
            />
          </div>
          {/*  */}
          <div
            className="mt-3
          "
          >
            <p className="text-[#0FCC88] pl-6 font-medium">Attention!</p>
            <p className="text-sm w-80 text-gray-400 text-justify pl-6">
              Being clingy is not a Bad thing it's preference Some couples Love
              it Some hate it. we Only use it for Preference in concierge
              service responses are Not public
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center pt-3 pb-10">
          <div className="mt-4">
            <Link to="/life-outside">
              <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                Skip
              </button>
            </Link>
            <Link to="/hair-color">
              <button className="bg-[#FFDE59] text-sm p-2 w-28 cursor-pointer ml-8 rounded">
                Continue
              </button>
            </Link>
          </div>
          <p className="text-xs mt-2 text-[#1C1C1C] pb-4">
            By continue you agree our{" "}
            <span className="underline cursor-pointer">Terms </span>
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

export default ClingyYou;
