import { queryAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import search from "../assets/icon-search.svg";

const SearchBar = ({ setUrl, query, setQuery, error }) => {
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      setUrl(`https://api.github.com/users/${query}`);
    }
  };

  return (
    <section className="w-100 max-w-box mb-6 mt-8.5">
      <div className=" flex rounded-search w-full bg-white shadow-lg ">
        <div className="flex flex-col justify-center ml-8 mr-6 min-w-8 min-h-8">
          <img src={search} alt="search" className="w-6  " />
        </div>

        <input
          className=" w-full text-H6 font-spaceReg  h-17 focus:outline-none"
          type="text"
          placeholder="Search GitHub username"
          value={query}
          onKeyDown={handleKeypress}
          onChange={(event) => setQuery(event.target.value)}
        />
        {error && (
          <div className="text-red flex flex-col text-body font-spaceReg justify-center w-1/4">
            <p>No results</p>
          </div>
        )}

        <div className="mr-6 ml-2 flex flex-col justify-center">
          <button
            className=" rounded-buttons font-spaceReg text-H3 text-darkWhite  bg-blue hover:bg-hoverBlue my-4 h-13 w-27 mt-0 mb-0"
            onClick={() => setUrl(`https://api.github.com/users/${query}`)}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

export default SearchBar;
