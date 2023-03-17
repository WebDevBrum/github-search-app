import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import { useReducer, useState } from "react";
import { initialState, stateReducer } from "./app-reducer";
import { useCustomContext, useMode } from "./context";

function App() {
  //converted this to a reducer
  // const [query, setQuery] = useState("");
  // const [url, setUrl] = useState("https://api.github.com/users/octocat");
  // const [error, setError] = useState(false);
  // const [mode, setMode] = useState("light");

  const mode = useMode();

  return (
    <div
      className={`min-[10px]:px-[9px] sm:px-[97px] flex flex-col min-h-screen justify-center items-center ${
        mode === "light" ? "bg-lightGrey" : "bg-darkBlack"
      }`}
    >
      <Header />
      <SearchBar />
      <div className="w-full max-w-box">
        <User />
      </div>
    </div>
  );
}

export default App;
