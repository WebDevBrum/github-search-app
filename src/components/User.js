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
      } rounded-search flex md:basis-100 sm:basis-98  h-99  shadow-lg p-12 `}
    >
      <div className="flex flex-col basis-97">
        <UserDetails user={user} mode={mode} />
        <div className="2md:ml-[150px] 2md:mt-[-50px]">
          <p
            className={`font-spaceReg sm:text-BODY min-[0px]:text-H4 h-8 mb-10  ${
              mode === "light" ? "text-greyBlue" : "text-darkWhite"
            } ${user.bio && user.bio.length > 0 ? "" : "opacity-50"}`}
          >
            {user.bio && user.bio.length > 0
              ? user.bio
              : "This profile has no bio"}
          </p>
          <Followers user={user} mode={mode} />
          <LocationSocial user={user} mode={mode} />
        </div>
      </div>
    </section>
  );
};

export default User;
