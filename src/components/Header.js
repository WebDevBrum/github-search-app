import React from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

const Header = () => {
  return (
    <div className="flex justify-between w-100 max-w-box items-center">
      <h1 className={"font-spaceBold text-H1"}>devFinder</h1>
      <div className="flex">
        <div className="font-spaceBold text-H4 ">
          <button>DARK</button>
        </div>

        <div>
          <img
            src={moon}
            alt="search"
            className="w-18 ml-4 mt-0.5 fill-darkBlack"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
