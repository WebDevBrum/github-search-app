import React, { useEffect, useState } from "react";
import Followers from "./UserComponents/Followers";
import LocationSocial from "./UserComponents/LocationSocial";
import UserDetails from "./UserComponents/UserDetails";

const User = ({ url, setQuery, setError, mode }) => {
  const [user, setUser] = useState({});

  const handleError = (err) => {
    console.log(err);
    setError(true);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        setError(false);
        const response = await fetch(url);
        const details = await response.json();
        if (details.name) {
          setUser(details);
          setQuery("");
        } else {
          throw new Error();
        }
      } catch (e) {
        handleError(e);
      }

      // return details;
    };
    // getUser("webDevBrum");
    // getUser("Hendrixer");
    // console.log(user);
    url !== "" && getUser().catch(handleError);
  }, [url, setQuery]);

  return (
    <section
      className={`${
        mode === "light" ? "bg-white" : "bg-darkBlue"
      } rounded-search flex w-100 h-99  shadow-lg p-12`}
    >
      <div className="w-98">
        <div className="">
          <img className="rounded-full w-29 h-29  " src={user.avatar_url}></img>
        </div>
      </div>

      <div className="w-97">
        <UserDetails user={user} mode={mode} />
        <Followers user={user} mode={mode} />
        <LocationSocial user={user} mode={mode} />
      </div>
    </section>
  );
};

export default User;
