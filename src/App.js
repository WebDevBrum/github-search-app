import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");

  // useEffect(() => {
  //   getUser("webDevBrum");
  //   getUser("Hendrixer");
  // }, []);

  // getUser("webDevBrum");
  // getUser("Hendrixer");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-lightGrey">
      <Header />
      <SearchBar setUrl={setUrl} query={query} setQuery={setQuery} />
      <User url={url} setQuery={setQuery} />
    </div>
  );
}

export default App;
