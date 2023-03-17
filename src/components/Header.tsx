import React, { Dispatch } from "react";
import { StateActions } from "../app-reducer";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import { useCustomContext } from "../context";

const Header = () => {
  const { mode, dispatch } = useCustomContext();

  return (
    <div className="flex justify-between w-full max-w-box items-center">
      <h1
        className={`font-spaceBold text-H1 ${
          mode === "dark" && "text-darkWhite"
        }`}
      >
        devFinder
      </h1>
      <div className="flex">
        <div
          className={`font-spaceBold text-H4 ${
            mode === "dark" && "text-darkWhite"
          }`}
        >
          <button
            onClick={
              mode === "light"
                ? () => dispatch({ type: "update-mode", payload: "dark" })
                : () => dispatch({ type: "update-mode", payload: "light" })
            }
          >
            {mode === "light" ? "DARK" : "LIGHT"}
          </button>
        </div>

        <div>
          <img
            onClick={
              mode === "light"
                ? () => dispatch({ type: "update-mode", payload: "dark" })
                : () => dispatch({ type: "update-mode", payload: "light" })
            }
            src={mode === "dark" ? sun : moon}
            alt="search"
            className={`w-18 ml-4 mt-0.5 fill-darkBlack`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
