import React from "react";
import AllowImg from "../images/allow.png";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <img
        src={AllowImg}
        alt="notification"
        className="h-60 w-56 mx-auto mt-4"
      />
      <div className="text-center mt-10">
        <h3 className="text-lg text-[#000000] mt-1 font-bold">
          Allow notifications
        </h3>
        <p className="text-xs">Get notifications you may have missed.</p>
      </div>
      <div className="flex flex-col justify-center items-center absolute bottom-20  right-1/3 left-1/3">
        <Link to="/location">
          <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm">
            Allow
          </button>
        </Link>
        <Link to="/">
          <button className="text-sm mt-2">Skip</button>
        </Link>
      </div>
    </div>
  );
};

export default Notification;
