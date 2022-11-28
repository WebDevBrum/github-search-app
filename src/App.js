import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("https://api.github.com/users/octocat");
  const [error, setError] = useState(false);
  const [mode, setMode] = useState("light");

  // useEffect(() => {
  //   getUser("webDevBrum");
  //   getUser("Hendrixer");
  // }, []);

  // getUser("webDevBrum");
  // getUser("Hendrixer");

  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center ${
        mode === "light" ? "bg-lightGrey" : "bg-darkBlack"
      }`}
    >
      <div className="max-w-[50%]">
        <Header mode={mode} setMode={setMode} />
        <SearchBar
          setUrl={setUrl}
          query={query}
          setQuery={setQuery}
          error={error}
          mode={mode}
        />
        <User mode={mode} url={url} setQuery={setQuery} setError={setError} />
      </div>
    </div>
  );
}

export default App;
