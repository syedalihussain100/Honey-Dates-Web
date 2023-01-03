import React, { useRef, useState, useEffect } from "react";
import Group from "../images/Group.png";
import { Link, useLocation } from "react-router-dom";
import {auth} from "../../config/firebase"


const Verfication = () => {
  const ref = useRef(null);
  // const location = useLocation();

  // let { data } = location.state;
  // console.log(data);

  const [input, setInput] = useState({
    verify1: "",
    verify2: "",
    verify3: "",
    verify4: "",
    verify5: "",
    verify6: "",
  });

  const inPutEvent = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    const otp = [
      input.verify1,
      input.verify2,
      input.verify3,
      input.verify4,
      input.verify5,
      input.verify6,
    ];
    console.log(otp.length);



  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <img src={Group} alt="group" className="h-44 w-32 mx-auto mt-3" />
      <form onSubmit={verifyOTP}>
        <div className="text-center mt-5">
          <p className="font-bold text-xl text-[#1C1C1C]">Verfication code</p>
          <p className="text-sm mt-2">Please enter the 5-digit code sent to</p>
          <p className="text-sm mt-2 font-bold text-[#1C1C1C]">
            +1 331 623 8413
            <span className="text-[#FFDE59] font-normal cursor-pointer ml-1">
              edit
            </span>
          </p>
          <div className="mt-6">
            <input
              name="verify1"
              ref={ref}
              value={input.verify1}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-[#E6E6E6] w-10 ml-2 text-center"
            />
            <input
              name="verify2"
              value={input.verify2}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-gray-100 w-10 ml-2 text-center"
            />
            <input
              name="verify3"
              value={input.verify3}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-gray-100 w-10 ml-2 text-center"
            />
            <input
              name="verify4"
              value={input.verify4}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-gray-100 w-10 ml-2 text-center"
            />
            <input
              name="verify5"
              value={input.verify5}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-gray-100 w-10 ml-2 text-center"
            />
            <input
              name="verify6"
              value={input.verify6}
              onChange={inPutEvent}
              type="text"
              className="focus:outline-none border-b-2 border-gray-100 w-10 ml-2 text-center"
            />
          </div>
        </div>

        <div className="absolute bottom-20 text-center right-1/3 left-1/3">
          <button
            type="submit"
            className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm"
          >
            Continue
          </button>
          <p className="text-xs mt-2 text-[#1C1C1C]">
            By continue you agree our <span className="underline">Terms</span>{" "}
            and
            <span className="underline ml-1">Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Verfication;
