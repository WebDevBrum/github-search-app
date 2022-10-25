import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [query, setQuery] = useState("");

  const getUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const details = await response.json();
    setUser((prevState) => ({ ...prevState, ...details }));
    setQuery("");
    // return details;
  };

  useEffect(() => {
    console.log("hello user", user);
    // getUser("webDevBrum");
    // getUser("Hendrixer");
    // console.log(user);
  }, [user]);

  // useEffect(() => {
  //   getUser("webDevBrum");
  //   getUser("Hendrixer");
  // }, []);

  // getUser("webDevBrum");
  // getUser("Hendrixer");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-lightGrey">
      <Header />
      <SearchBar getUser={getUser} query={query} setQuery={setQuery} />
      <User user={user} />
    </div>
  );
}

export default App;
