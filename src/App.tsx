import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import { useState } from "react";

function App() {
  //convert this to a reducer
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
      className={`min-[10px]:px-[9px] sm:px-[97px] flex flex-col min-h-screen justify-center items-center ${
        mode === "light" ? "bg-lightGrey" : "bg-darkBlack"
      }`}
    >
      <Header mode={mode} setMode={setMode} />
      <SearchBar
        setUrl={setUrl}
        query={query}
        setQuery={setQuery}
        error={error}
        mode={mode}
      />
      <div className="w-full max-w-box">
        <User mode={mode} url={url} setQuery={setQuery} setError={setError} />
      </div>
    </div>
  );
}

export default App;
