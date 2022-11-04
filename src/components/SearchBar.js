import { queryAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import search from "../assets/icon-search.svg";

const SearchBar = ({ setUrl, query, setQuery }) => {
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      setUrl(`https://api.github.com/users/${query}`);
    }
  };

  return (
    <section className="w-3/4 max-w-box">
      <div className=" flex rounded-search w-full bg-white ">
        <img src={search} />
        <input
          className={" w-full h-16"}
          type="text"
          placeholder="Search.."
          value={query}
          onKeyDown={handleKeypress}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="mr-6 rounded-buttons px-5 bg-blue my-4"
          onClick={() => setUrl(`https://api.github.com/users/${query}`)}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
