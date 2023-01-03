import React, { useState, useRef, useEffect } from "react";
import FramerImg from "../images/frame1.png";
import { Link } from "react-router-dom";

const Identify = () => {
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [non, setNon] = useState("");
  const [transmale, setTransMale] = useState("");
  const [transfemale, setTransFemale] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let data = {
    //   male,
    //   female,
    //   non,
    //   transmale,
    //   transfemale,
    // };
    // setMale("");
    // setFemale("");
    // setNon("");
    // setTransMale("");
    // setTransFemale("");

    // console.log(data);
  };

  return (
    <div className="flex justify-around items-center relative h-screen md:flex-col lg:flex-row sm:flex-col max-[635px]:flex-col">
      <div>
        <img
          src={FramerImg}
          alt="frame"
          className="h-72 w-72 sm:w-32 sm:h-32 sm:mt-2 lg:h-72 lg:w-72 max-[635px]:w-28 max-[635px]:h-28 max-[635px]:mt-2"
        />
      </div>
      <div className="w-96 h-3/4 mt-4 rounded overflow-hidden shadow-lg bg-white">
        <form onSubmit={handleSubmit}>
          <div className="text-center mt-5">
            <h3 className="font-bold text-xl text-[#1C1C1C] mb-6">
              How do you identify as?
            </h3>

            <select
              value={male}
              onChange={(e) => setMale(e.target.value)}
              name="male"
              id="male"
              className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-[#f9f9f9] appearance-none max-[635px]:w-full"
            >
              <option value="male">Male</option>
              <option value="straight">Straight</option>
              <option value="bisexual">Bisexual</option>
              <option value="gay">Gay</option>
            </select>

            <select
              value={female}
              onChange={(e) => setFemale(e.target.value)}
              name="female"
              id="female"
              className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none max-[635px]:w-full"
            >
              <option value="female">Female</option>
              <option value="straight">Straight</option>
              <option value="bisexual">Bisexual</option>
              <option value="gay">Gay</option>
            </select>

            <input
              ref={ref}
              value={non}
              onChange={(e) => setNon(e.target.value)}
              type="text"
              placeholder="Non binaray"
              className="w-80 mb-3 focus:outline-none bg-gray-100 rounded-md p-1 placeholder:text-sm max-[635px]:w-full"
            />

            <input
              value={transmale}
              onChange={(e) => setTransMale(e.target.value)}
              type="text"
              placeholder="Trans Male to Female"
              className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 placeholder:text-sm max-[635px]:w-full"
            />

            <input
              value={transfemale}
              onChange={(e) => setTransFemale(e.target.value)}
              type="text"
              placeholder="Trans Female to Male"
              className="w-80 focus:outline-none rounded-md p-1 bg-gray-100 placeholder:text-sm max-[635px]:w-full"
            />
          </div>
          <div className="absolute bottom-28 text-center ml-14 sm:bottom-10 lg:bottom-28 max-[635px]:bottom-10">
            <Link to="/kids">
              <button
                type="submit"
                className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-[635px]:w-full"
              >
                Continue
              </button>
            </Link>
            <p className="text-xs mt-2 text-[#1C1C1C]">
              By continue you agree our <span className="underline">Terms</span>{" "}
              and
              <span className="underline ml-1">Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Identify;
