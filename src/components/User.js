import React, { useEffect, useState } from "react";
import Followers from "./UserComponents/Followers";
import LocationSocial from "./UserComponents/LocationSocial";
import UserDetails from "./UserComponents/UserDetails";

const User = ({ url, setQuery }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(url);
      const details = await response.json();
      setUser(details);
      setQuery("");
      // return details;
    };
    // getUser("webDevBrum");
    // getUser("Hendrixer");
    // console.log(user);
    url !== "" && getUser();
  }, [url, setQuery]);

  return (
    <section className="bg-white rounded-search flex w-100 h-99  shadow-lg p-12">
      <div className="w-98">
        <div className="">
          <img className="rounded-full w-29 h-29  " src={user.avatar_url}></img>
        </div>
      </div>

      <div className="w-97">
        <UserDetails user={user} />
        <Followers user={user} />
        <LocationSocial user={user} />
      </div>
    </section>
  );
};

export default User;
