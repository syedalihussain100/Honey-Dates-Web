import React from "react";
import heightImg from "../images/height.png";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import { withStyles, makeStyles } from "@mui/styles";
import { AiOutlineSync } from "react-icons/ai";

const PrettoSlider = withStyles({
  thumb: {
    height: 24,
    width: 24,

    border: "2px solid currentColor",
    marginTop: "-2px",
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "auto",
    marginTop: 30,
  },
  inch: {
    "&>.MuiSlider-track": {
      backgroundColor: "#FFDE59 !important",
      border: "none !important",
    },
    "&>.MuiSlider-thumb": {
      backgroundColor: "#FFDE59 !important",
    },
  },
});

function valuetext(value) {
  return `${value}.`;
}

const Height = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-cente">
      <div className="w-1/3 h-auto rounded shadow-lg bg-white mx-auto max-sm:w-full max-sm:h-full">
        <h3 className="font-bold text-xl text-[#1C1C1C] font-serif pt-4 text-center pb-6">
          Your Height
        </h3>
        <img
          src={heightImg}
          alt="height"
          className="h-64 w-auto mx-auto max-sm:h-44 max-sm:w-40"
        />

        <div className={classes.root}>
          <div className="flex  justify-between">
            <p className="font-bold">{value}"Inches</p>
            <div className="flex items-center">
              <AiOutlineSync className="text-gray-400" />
              <span className="ml-1 text-gray-400">Inches</span>
            </div>
          </div>

          <PrettoSlider
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            defaultValue={20}
            className={classes.inch}
          />
        </div>

        <div className="mt-40 lg:pb-5 max-sm:py-6 flex flex-col items-center">
          <Link to="/height-range">
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

export default Height;
