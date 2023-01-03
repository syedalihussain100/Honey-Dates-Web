import React, { useState, useEffect, useRef } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Group from "../images/Group.png";

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ottp, setOttp] = useState("");
  const [flag, setFlag] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  const navigate = useNavigate();

  // const navigate = useNavigate();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-containe",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          setConfirmObj(confirmationResult);
          setFlag(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error?.message);
        });
    }
  };

  const VerifyOttp = async (e) => {
    e.preventDefault();

    try {
      setError("");
      if (ottp === "" || ottp === null) return;
      await confirmObj.confirm(ottp);
      navigate(`/user-dashboard`);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen relative">
        <img
          style={{ display: flag ? "block" : "none" }}
          className="h-44 w-32 mx-auto mt-3"
          src={Group}
          alt="logo"
        />
        <div className="text-center mt-8">
          <h3 className="font-bold text-xl text-[#1C1C1C]">
            {flag ? "Verfication code" : "Whats your Number?"}
          </h3>
          <p className="text-sm font-normal text-[#1C1C1C]	mt-2">
            {flag
              ? "Please enter the 5-digit code sent to"
              : "We’ll send you a OTP to verify your idenity"}
          </p>
          <p className="text-sm mt-2 font-bold text-[#1C1C1C] tracking-widest">{flag ? phoneNumber : null}</p>
        </div>

        <form
          className="flex flex-col 	 mx-auto"
          onSubmit={handleSubmit}
          style={{ display: !flag ? "block" : "none" }}
        >
          <PhoneInput
            className="border-2 mx-auto text-center mt-16 max-sm:w-48 max-sm:items-center"
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

          <div id="recaptcha-containe"></div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              type="submit"
              className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm"
            >
              Continue
            </button>

            <p className="text-xs mt-2 text-[#1C1C1C] max-sm:text-center">
              By continue you agree our <span className="underline">Terms</span>{" "}
              and
              <span className="underline ml-1"> Privacy Policy</span>
            </p>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mt-10">
          <form
            onSubmit={VerifyOttp}
            style={{ display: flag ? "block" : "none" }}
          >
            <input
              className="focus:outline-none border-b-2 border-[#E6E6E6]  text-center placeholder:text-xs"
              type="text"
              ref={ref}
              placeholder="Enter Your Ottp Code"
              value={ottp}
              onChange={(e) => setOttp(e.target.value)}
            />
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <button
                className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm"
                type="submit"
              >
                Verify Ottp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginWithPhone;
