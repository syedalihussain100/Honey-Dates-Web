import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import BalImg from "../images/bal.png";
import "./Calendar.css";
import { Link } from "react-router-dom";

const Born = () => {
  const defaultValue = {
    year: 2022,
    month: 12,
    day: 16,
  };

  const [selectedDays, setSelectedDays] = useState(defaultValue);

  return (
    <div className="flex flex-col relative h-screen">
      <img src={BalImg} alt="baloon" className="h-32 w-32 mx-auto mt-2" />
      <div className="text-center mt-4">
        <h3 className="font-bold text-xl text-[#1C1C1C]">When were you born</h3>
        <p className="text-xs mt-2 font-normal">Birthday</p>
      </div>
      <Calendar
        value={selectedDays}
        onChange={setSelectedDays}
        calendarClassName="responsive-calendar"
        shouldHighlightWeekends
      />

      <div  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link to="/email">
          <button className="bg-[#FFDE59] p-2 w-60 rounded-md text-sm text-center max-sm:w-full">
            Continue
          </button>
        </Link>
        <p className="text-xs mt-2 text-[#1C1C1C] text-center max-sm:text-center">
          By continue you agree our <span className="underline">Terms</span> and
          <span className="underline ml-1"> Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Born;
