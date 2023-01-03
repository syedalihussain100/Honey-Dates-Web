import React, { useEffect } from "react";
import "./App.css";
import LoginSignUp from "./components/SignUp/LoginSignUp";
import LoginWithPhone from "./components/SignUp/LoginWithPhone";
import Verfication from "./components/SignUp/Verfication";
import Name from "./components/SignUp/Name";
import Born from "./components/SignUp/Born";
import Email from "./components/SignUp/Email";
import Notification from "./components/SignUp/Notification";
import Location from "./components/SignUp/Location";
import Identify from "./components/SignUp/Identify";
import Kids from "./components/SignUp/Kids";
import PublicBio from "./components/SignUp/PublicBio";
import NotPublic from "./components/SignUp/notPublic";
import NotPublic10Years from "./components/SignUp/NotPublic10Years";
import Music from "./components/SignUp/Music";
import Vote from "./components/SignUp/Vote";
import PoliticalDating from "./components/SignUp/PoliticalDating";
import IntroVerted from "./components/SignUp/IntroVerted";
import SelectAllApply from "./components/SignUp/SelectAllApply";
import Photos from "./components/SignUp/Photos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/Slices/userSlice";
import User from "./components/Dashboard/User";
import Somke from "./components/SignUp/Somke";
import Vape from "./components/SignUp/Vape";
import Marijuana from "./components/SignUp/Marijuana";
import Drugs from "./components/SignUp/Drugs";
import CupDrugs from "./components/SignUp/CupDrugs";
import Instagram from "./components/SignUp/Instagram";
import Occupations from "./components/SignUp/Occupations";
import Interest from "./components/SignUp/Interest";
import Education from "./components/SignUp/Education";
import TypeRelation from "./components/SignUp/TypeRelation";
import YourReligion from "./components/SignUp/YourReligion";
import Diet from "./components/SignUp/Diet";
import WhichDiet from "./components/SignUp/WhichDiet";
import FavouriteFood from "./components/SignUp/FavouriteFood";
import Excerice from "./components/SignUp/Excerice";
import Ethinicity from "./components/SignUp/Ethinicity";
import WordsDescribe from "./components/SignUp/WordsDescribe";
import Features from "./components/SignUp/Features";
import Disablity from "./components/SignUp/Disablity";
import Disablities from "./components/SignUp/Disablities";
import Height from "./components/SignUp/Height";
import HeightRange from "./components/SignUp/HeightRange";
import Builder from "./components/SignUp/Builder";
import TypeDating from "./components/SignUp/TypeDating";
import ReferenceNumber from "./components/SignUp/ReferenceNumber";
import MajorDeal from "./components/SignUp/MajorDeal";
import WhatAopen from "./components/SignUp/WhatAopen";
import LongestRelationShip from "./components/SignUp/LongestRelationShip";
import NextRelationSHip from "./components/SignUp/NextRelationSHip";
import WatchMovie from "./components/SignUp/WatchMovie";
import BedYou from "./components/SignUp/BedYou";
import LifeOutSide from "./components/SignUp/LifeOutSide";
import ClingyYou from "./components/SignUp/ClingyYou";
import HairColor from "./components/SignUp/HairColor";
import ColorPartnerHave from "./components/SignUp/ColorPartnerHave";
import LengthHave from "./components/SignUp/LengthHave";
import LengthPartner from "./components/SignUp/LengthPartner";
import EyeHave from "./components/SignUp/EyeHave";
import YourPartnerHave from "./components/SignUp/YourPartnerHave";
import SuccessfulProfile from "./components/SignUp/SuccessfulProfile";




// import phoneUser from "./components/Dashboard/phoneUser";

function App() {
  const user = useSelector((state) => state?.user?.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            displayName: userAuth?.displayName,
            email: userAuth?.email,
            photoURL: userAuth?.photoURL,
            uid: userAuth?.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubcribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {!user ? (
            <>
              <Route path="/" element={<LoginSignUp />} />
              <Route path="/loginphone" element={<LoginWithPhone />} />
              <Route path="/verification" element={<Verfication />} />
              <Route path="/name" element={<Name />} />
              <Route path="/born" element={<Born />} />
              <Route path="/email" element={<Email />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/location" element={<Location />} />
              <Route path="/identify" element={<Identify />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/public" element={<PublicBio />} />
              <Route path="/not-public" element={<NotPublic />} />
              <Route path="/notpublic-10year" element={<NotPublic10Years />} />
              <Route path="/music" element={<Music />} />
              <Route path="/vote" element={<Vote />} />
              <Route path="/political-dating" element={<PoliticalDating />} />
              <Route path="/introverted" element={<IntroVerted />} />
              <Route path="/selectallapply" element={<SelectAllApply />} />
              <Route path="/photo" element={<Photos />} />
              <Route path="/phone-user-dashboard" element={<phoneUser />} />
              <Route path="/smoke" element={<Somke />} />
              <Route path="/vape" element={<Vape />} />
              <Route path="/marijuana" element={<Marijuana />} />
              <Route path="/drugs" element={<Drugs />} />
              <Route path="/cup-drugs" element={<CupDrugs />} />
              <Route path="/instagram" element={<Instagram />} />
              <Route path="/occupations" element={<Occupations />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/education" element={<Education />} />
              <Route path="/type-relation" element={<TypeRelation />} />
              <Route path="/your-religion" element={<YourReligion />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/which-diet" element={<WhichDiet />} />
              <Route path="/favourite-food" element={<FavouriteFood />} />
              <Route path="/excercise" element={<Excerice />} />
              <Route path="/thinicity" element={<Ethinicity />} />
              <Route path="/words-describe" element={<WordsDescribe />} />
              <Route path="/features" element={<Features />} />
              <Route path="/disablity" element={<Disablity />} />
              <Route path="/disablities" element={<Disablities />} />
              <Route path="/height" element={<Height />} />
              <Route path="/height-range" element={<HeightRange />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/type-dating" element={<TypeDating />} />
              <Route path="/reference-number" element={<ReferenceNumber />} />
              <Route path="/major-deal" element={<MajorDeal />} />
              <Route path="/what-open" element={<WhatAopen />} />
              <Route path="/longest-relationship" element={<LongestRelationShip />} />
              <Route path="/next-relationship" element={<NextRelationSHip />} />
              <Route path="/watch-movie" element={<WatchMovie />} />
              <Route path="/bed-you" element={<BedYou />} />
              <Route path="/life-outside" element={<LifeOutSide />} />
              <Route path="/clingy-you" element={<ClingyYou />} />
              <Route path="/hair-color" element={<HairColor />} />
              <Route path="/color-partner-have" element={<ColorPartnerHave />} />
              <Route path="/length-have" element={<LengthHave />} />
              <Route path="/length-partner" element={<LengthPartner />} />
              <Route path="/eye-have" element={<EyeHave />} />
              <Route path="/your-partner-have" element={<YourPartnerHave />} />
              <Route path="/success-profile" element={<SuccessfulProfile />} />
       


            
            </>
          ) : (
            <Route path="/user-dashboard" element={<User />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
