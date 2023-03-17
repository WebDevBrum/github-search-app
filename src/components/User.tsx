import React, { useEffect, useState, Dispatch } from "react";
import { useCustomContext } from "../context";
import { UserProps } from "../Props";
import Followers from "./UserComponents/Followers";
import LocationSocial from "./UserComponents/LocationSocial";
import UserDetails from "./UserComponents/UserDetails";

// export interface UserProps {
//   url: string;
//   setQuery: Dispatch<React.SetStateAction<string>>;
//   setError: Dispatch<React.SetStateAction<boolean>>;
//   mode: string;
// }

const User = () => {
  const { dispatch, url, mode } = useCustomContext();

  const [user, setUser] = useState<UserBio>();

  const handleError = (err: unknown) => {
    console.log(err);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch({ type: "update-error", payload: false });
        const response = await fetch(url);
        const details = await response.json();
        if (details.name) {
          setUser(details);
          dispatch({ type: "update-query", payload: "" });
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
  }, [url, dispatch]);

  return (
    <section
      className={`${
        mode === "light" ? "bg-white" : "bg-darkBlue"
      } rounded-search flex md:basis-100 sm:basis-98  h-99  shadow-lg p-12 `}
    >
      <div className="flex flex-col basis-97">
        {user && <UserDetails user={user} mode={mode} />}
        <div className="2md:ml-[150px] 2md:mt-[-50px]">
          <p
            className={`font-spaceReg sm:text-BODY min-[0px]:text-H4 h-8 mb-10  ${
              mode === "light" ? "text-greyBlue" : "text-darkWhite"
            } ${user?.bio && user.bio.length > 0 ? "" : "opacity-50"}`}
          >
            {user?.bio && user.bio.length > 0
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
