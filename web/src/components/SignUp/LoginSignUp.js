import React from "react";
import "./LoginSignUp.css";
import Image from "../images/login.png";
import Logo from "../images/logo.png";
import google from "../images/gicon.svg";
import { BsFacebook, BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import firebase from "firebase/compat/app";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/userSlice";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleAuth = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        const data = res?.user;
        dispatch(
          login({
            displayName: data?.displayName,
            email: data?.email,
            photoURL: data?.photoURL,
            uid: data?.uid,
          })
        );
        navigate("/user-dashboard");
      })
      .catch((err) => console.log(err));
  };

  const facebookAuth = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        const data = res?.user;
        console.log(data);
        dispatch(
          login({
            displayName: data?.displayName,
            email: data?.email,
            photoURL: data?.photoURL,
            uid: data?.uid,
          })
        );
        navigate("/user-dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="relative">
      <img className="bgImg" src={Image} alt="backgroundImage" />
      <div className="flex flex-col justify-center items-center text-center">
        <div className="absolute top-0 mt-7">
          <img className="mx-auto w-18 h-16" src={Logo} alt="logo" />
          <p className="text-white w-80 text-xs leading-5 mt-5 font-normal">
            The only dating app designed to help you find your soulmate. Filled
            with different types of events, designed for young professionals &
            couples
          </p>
          <p className="mt-5 text-white text-xs">Lets get started</p>
          <Link to="/loginphone">
            <button className="mt-4 bg-[#FFDE59] p-3 text-[#1C1C1C] leading-3 text-xs w-60 rounded-md">
              Log in with phone number
            </button>
          </Link>

          <div className="mt-2">
            <span className="inline-ali"></span>
            <p className="text-white text-sm ">or</p>
            <span className="inline-ali1"></span>
          </div>
          <div className="flex flex-col mt-8 justify-center items-center text-center">
            <button
              onClick={() => alert("Continue With Apple")}
              className="bg-[#1C1C1C] p-3 leading-3 text-xs w-60 rounded-md text-[#FFFFFF] mt-4 flex justify-center items-center"
            >
              <BsApple className="mr-2 text-[#FFFFFF] h-4 w-4" />
              Continue with Apple
            </button>
            <button
              onClick={facebookAuth}
              className="bg-[#1878F1] p-3 leading-3 text-xs w-60 rounded-md text-[#FFFFFF] mt-4 flex justify-center items-center"
            >
              <BsFacebook className="mr-2 text-[#FFFFFF] h-4 w-4" />
              Continue with Facebook
            </button>
            <button
              onClick={googleAuth}
              className="bg-[#FFFFFF] p-3 leading-3 text-xs w-60 rounded-md text-[#1C1C1C] mt-4 flex justify-center items-center"
            >
              <img src={google} alt="logo" className="mr-2 h-4 w-4" />
              Continue with Google
            </button>
            <Link to="/name">
              <p className="text-[#FFFFFF] text-xs mt-4 underline cursor-pointer">
                Log in as Mediator
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
