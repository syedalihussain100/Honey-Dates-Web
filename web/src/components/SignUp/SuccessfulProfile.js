import React from "react";
import successImg from "../images/success.png";

const SuccessfulProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div>
        <img src={successImg} alt="logo" className="mx-auto h-32"/>
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif w-80 text-center mx-auto mt-4">Congratulation! your profile has been created</h3>
        <p className="w-80 text-gray-400 mt-5">
          Please make sure to follow our guidlines and to be respectful of
          others. We hope you meet your match!....{" "}
        </p>

        <p className="w-80 text-gray-400 mt-5">
          If you would like to get matchs that suit you better fill out the
         <span className="text-[#F5C500]"> extra questions here</span> (these answers will not show up on your profile).
        </p>
      </div>
    </div>
  );
};

export default SuccessfulProfile;
