import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AiFillCheckCircle } from "react-icons/ai";

const YourReligion = () => {
  const [Christian, setChristian] = useState("");
  const [Jewish, setJewish] = useState("");
  const [Catholic, setCatholic] = useState("");
  const [Muslim, setMuslim] = useState("");
  const [Hinduism, setHinduism] = useState("");
  const [Buddhism, setBuddhism] = useState("");
  const [Chinese, setChinese] = useState("");
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <div className="w-96 h-4/5 rounded overflow-hidden shadow-lg bg-white mx-auto text-center">
        <h3 className="w-72 mx-auto font-bold text-xl text-[#1C1C1C] font-serif">
          What is Your religion?
        </h3>
        <div className="mt-10">
          {/* one */}
          <select
            value={Christian}
            onChange={(e) => setChristian(e.target.value)}
            name="Christian"
            id="Christian"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none "
          >
            <option value="Christian" className="shadow-lg bg-white">
              Christian
            </option>
            <option
              value="is your mom born christian"
              className="shadow-lg bg-white"
            >
              Is your mom born Christian
            </option>
            <option
              value="is your dad born christian"
              className="shadow-lg bg-white"
            >
              Is your Dad born Christian
            </option>
            {/* nested */}
            <optgroup
              label="Type"
              className="shadow-lg bg-white cursor-pointer"
            >
              <option value="Anglican">Anglican</option>
              <option value="Apostolic">Apostolic</option>
              <option value="AssemblyofGod">Assembly of God</option>
              <option value="Baptist">Baptist</option>
              <option value="Catholic">Catholic</option>
              <option value="ChristianReformed">Christian Reformed</option>
              <option value="ChurchofChrist">Church of Christ</option>
              <option value="Episcopalian/Anglican">
                Episcopalian/ Anglican
              </option>
              <option value="Evangelical">Evangelical</option>
              <option value="interdenominational">Interdenominational</option>
              <option value="Lutheran">Lutheran</option>
              <option value="Messianic">Messianic</option>
              <option value="Methodist">Methodist</option>
              <option value="Nazarene">Nazarene</option>
              <option value="Non-denominational">Non-denominational</option>
              <option value="Not sure">Not sure</option>
              <option value="Orthodox">Orthodox</option>
              <option value="Pentecostal">Pentecostal</option>
              <option value="Presbyterian">Presbyterian</option>
              <option value="Seventh-Day Adventist">
                Seventh-Day Adventist
              </option>
              <option
                value="Southern Baptist
"
              >
                Southern Baptist
              </option>
            </optgroup>
          </select>
          {/* two */}
          <select
            value={Jewish}
            onChange={(e) => setJewish(e.target.value)}
            name="Jewish"
            id="Jewish"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Jewish" className="shadow-lg bg-white">
              Jewish
            </option>
            <option value="Mymomisbornjewish" className="shadow-lg bg-white">
              My mom is born jewish
            </option>
            <option value="Mydadisbornjewish" className="shadow-lg bg-white">
              My dad is born jewish
            </option>
            {/* nested */}
            <optgroup label="Type" className="shadow-lg bg-white">
              <option value="Orthodox">Orthodox</option>
              <option value="Modernorthodox">Modern orthodox</option>
              <option value="Conservative">Conservative</option>
              <option value="Reformed">Reformed</option>
              <option value="JustJewish">Just Jewish</option>
              <option value="Converted">Converted</option>
              <option value="Traditional ">Traditional </option>
              <option value="Secular">Secular</option>
              <option value="Howkosherareyou?">How kosher are you?</option>
              <option value="Not kosher at all">Not kosher at all</option>
              <option value="Tosomedegree">To some degree</option>
              <option value="Always">Always</option>
              <option value="At Home">At Home</option>
              <option value="KeepkosheronlyathomeeatdairyoutNon-kosherrestaurant">
                Keep kosher only at home eat dairy out Non-kosher restaurant
              </option>
            </optgroup>
          </select>
          {/* three */}
          <select
            value={Catholic}
            onChange={(e) => setCatholic(e.target.value)}
            name="Catholic"
            id="Catholic"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Catholic" className="shadow-lg bg-white">
              Catholic
            </option>
            <option
              value="Isyourmomborn Catholic"
              className="shadow-lg bg-white"
            >
              Is your mom born Catholic
            </option>
            <option
              value="IsyourDadbornCatholic"
              className="shadow-lg bg-white"
            >
              Is your Dad born Catholic
            </option>
            {/* nested */}
            <optgroup label="Type" className="shadow-lg bg-white">
              <option value="Orthodox">Orthodox</option>
              <option value="Non-practicing">Non-practicing</option>
              <option value="Reformed">Reformed</option>
            </optgroup>
          </select>
          {/* four */}
          <select
            value={Muslim}
            onChange={(e) => setMuslim(e.target.value)}
            name="Muslim"
            id="Muslim"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Muslim" className="shadow-lg bg-white">
              Muslim
            </option>
            <option value="IsyourmombornMuslim" className="shadow-lg bg-white">
              Is your mom born Muslim
            </option>
            <option value="IsyourDadbornMuslim" className="shadow-lg bg-white">
              Is your Dad born Muslim
            </option>
            {/* nested */}
            <optgroup label="Type" className="shadow-lg bg-white">
              <option value="Orthodox">Sunni</option>
              {/*  */}
              <option value="Hanafi">Hanafi</option>
              <option value="Shafi" className="li">
                Shafi
              </option>
              <option value="Maliki">Maliki</option>
              <option value="hanbali">hanbali</option>
              {/*  */}
              <option value="Shia">Shia</option>
              <option value="Ibadi ">Ibadi </option>
              <option value="Other">Other</option>
              <option value="NotSure">Not Sure</option>
              <option value="FoodType" className="font-bold">
                Food Type
              </option>
              <option value="KeepsHalal">Keeps Halal</option>
              <option value="Sometimes">Sometimes</option>
              <option value="Never">Never</option>
            </optgroup>
          </select>
          {/* five */}
          <select
            value={Hinduism}
            onChange={(e) => setHinduism(e.target.value)}
            name="Hinduism"
            id="Hinduism"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Hinduism">Hinduism</option>
          </select>
          {/* six */}
          <select
            value={Buddhism}
            onChange={(e) => setBuddhism(e.target.value)}
            name="Buddhism"
            id="Buddhism"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Buddhism">Buddhism</option>
          </select>
          {/* seven */}
          <select
            value={Chinese}
            onChange={(e) => setChinese(e.target.value)}
            name="Chinese traditional religion"
            id="Chinese traditional religion"
            className="w-80 mb-3 focus:outline-none rounded-md p-1 bg-gray-100 appearance-none"
          >
            <option value="Chinese traditional religion">
              Chinese traditional religion
            </option>
          </select>
        </div>
        <div className="mt-16 lg:pb-5">
          <Link to="/diet">
            <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm max-sm:max-w-md">
              Continue
            </button>
          </Link>

          <p className="text-xs mt-2 text-[#1C1C1C] min-[984px]:text-xs">
            By continue you agree our
            <span className="underline cursor-pointer"> Terms </span>
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

export default YourReligion;
