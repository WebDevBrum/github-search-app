import { queryAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";

const SearchBar = ({ getUser, query, setQuery }) => {
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      getUser(query);
    }
  };

  return (
    <section className="w-3/4">
      <input
        className={"border-solid border-2 border-sky-500 w-full"}
        type="text"
        placeholder="Search.."
        value={query}
        onKeyDown={handleKeypress}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={() => getUser(query)}>Submit</button>
    </section>
  );
};

export default SearchBar;
