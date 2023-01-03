import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Link } from "react-router-dom";

const ReferenceNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="grid place-items-center -mt-16">
      <div className="h-3/4 w-96 shadow-lg bg-white grid">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 w-72 mx-auto text-center">
          References input number and email of reference
        </h3>
        <p className="text-center text-gray-400">(Optional)</p>
        <div className="overflow-y-scroll">
          <div className="mt-3">
            <p className="font-bold ml-10 mb-5">1st Refernces</p>
            <label className="ml-10">Name</label>
            <input
              className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md py-3 bg-gray-100 mx-auto text-left pl-4 mt-1"
              placeholder="Name"
            />
          </div>

          {/*  */}
          <div className="mt-3">
            <label className="ml-10">Email</label>
            <input
              className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md py-3 bg-gray-100 mx-auto text-left pl-4 mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="ml-10">Phone Number</label>
            <PhoneInput
              className="border-2 mx-auto text-center  max-sm:w-48 max-sm:items-center w-80 mt-2"
              international
              countryCallingCodeEditable={false}
              defaultCountry="PK"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              error={
                phoneNumber
                  ? isValidPhoneNumber(phoneNumber)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
            />
          </div>

          {/* second reference */}
          <div>
            <p className="font-bold ml-10 mt-4">2st Refernces</p>
            <div className="mt-6">
              <label className="ml-10">Name</label>
              <input
                className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md py-3 bg-gray-100 mx-auto text-left pl-4 mt-1"
                placeholder="Name"
              />
            </div>

            <div className="mt-6">
              <label className="ml-10">Email</label>
              <input
                className="flex items-center justify-between w-80 mb-3 focus:outline-none rounded-md py-3 bg-gray-100 mx-auto text-left pl-4 mt-1"
                placeholder="Enter your email"
              />
            </div>
            <label className="ml-10">Phone Number</label>
            <PhoneInput
              className="border-2 mx-auto text-center  max-sm:w-48 max-sm:items-center w-80 mt-2"
              international
              countryCallingCodeEditable={false}
              defaultCountry="PK"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              error={
                phoneNumber
                  ? isValidPhoneNumber(phoneNumber)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
            />
            <div className="flex flex-col justify-center items-center pt-3 pb-10">
              <div className="mt-4">
                <Link to="/type-dating">
                  <button className="shadow-md bg-[#FFFFFF] text-sm p-2 w-28 rounded">
                    Skip
                  </button>
                </Link>
                <Link to="/major-deal">
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
      </div>
    </div>
  );
};

export default ReferenceNumber;
