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
    <section className="bg-white flex w-3/4 max-w-box">
      <div className="w-1/4 flex justify-center">
        <div className="mt-12">
          <img className="rounded-full w-28 h-28  " src={user.avatar_url}></img>
        </div>
      </div>
      <div className="w-3/4 max-w-box mt-12">
        <UserDetails user={user} />
        <Followers user={user} />
        <LocationSocial user={user} />
      </div>
    </section>
  );
};

export default User;
