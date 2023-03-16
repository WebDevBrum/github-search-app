import React, { Dispatch } from "react";
import search from "../assets/icon-search.svg";
import { SearchProps } from "../Props";

const SearchBar = ({ setUrl, query, setQuery, error, mode }: SearchProps) => {
  const handleKeypress = (e: ErrorProps) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      setUrl(`https://api.github.com/users/${query}`);
    }
  };

  return (
    <section className="flex w-full max-w-box mb-6 mt-8.5">
      <div
        className={`flex rounded-search basis-100 ${
          mode === "light" ? "bg-white" : "bg-darkBlue"
        } shadow-lg`}
      >
        <div className="flex flex-col justify-center min-[0px]:ml-[16px] sm:ml-8 min-[0px]:mr-[5px] sm:mr-6 min-w-8 min-h-8">
          <img src={search} alt="search" className="w-6  " />
        </div>

        <input
          className={`basis-full min-[0px]:text-H4  sm:text-H5 font-spaceReg  h-17 focus:outline-none ${
            mode === "light"
              ? "bg-white"
              : "bg-darkBlue text-darkWhite placeholder:text-darkWhite"
          } `}
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onKeyDown={handleKeypress}
          onChange={(event) => setQuery(event.target.value)}
        />
        {error && (
          <div className="text-red flex flex-col text-body font-spaceReg justify-center basis-1/4">
            <p>No results</p>
          </div>
        )}

        <div className="mr-6 ml-2 flex flex-col justify-center">
          <button
            className=" rounded-buttons font-spaceReg min-[0px]:text-BODYSM sm:text-H3 text-darkWhite  bg-blue hover:bg-hoverBlue my-4 h-13 sm:w-27 min-[0px]:w-[80px] mt-0 mb-0"
            onClick={() => setUrl(`https://api.github.com/users/${query}`)}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

export default SearchBar;
