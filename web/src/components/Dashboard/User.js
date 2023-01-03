import React from "react";
import { logout } from "../../redux/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { displayName, photoURL, email } = useSelector(
    (state) => state?.user?.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(auth.signOut()));
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-end  items-center">
      <div className="mt-40">
        <h3>User Dasboard: {displayName ?? "Welcome"}</h3>
        <img style={{display: photoURL ? "block" : "none"}} src={photoURL} alt={displayName} className="rounded-full h-16 w-16 mx-auto"/>
        <p style={{display: email ? "block" : "none"}}>Email: {email}</p>
        <button onClick={handleLogout} className="bg-red-400 p-2 mt-6 text-center text-white rounded-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
