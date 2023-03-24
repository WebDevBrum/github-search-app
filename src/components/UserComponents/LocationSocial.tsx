import React from "react";
import search from "../../assets/icon-location.svg";
import company from "../../assets/icon-company.svg";
import website from "../../assets/icon-website.svg";
import twitter from "../../assets/icon-twitter.svg";

const LocationSocial = ({ user, mode }: { user: UserBio; mode: string }) => {
  console.log(user);
  return (
    <div>
      {user && user.login && (
        <div
          className={`flex sm:flex-wrap sm:flex-row min-[0px]:flex-col   ${
            mode === "light" ? "text-greyBlue" : "text-darkWhite"
          } h-18`}
        >
          <div className="flex basis-2/4 min-[0px]:mb-[5px]">
            <div>
              <img src={search} alt="search" className="w-18  mr-13" />
            </div>
            <p
              className={`font-spaceReg text-H4 ${
                !user.location && "opacity-50"
              }`}
            >
              {user.location || "Not Available"}
            </p>
          </div>
          <div className="flex basis-2/4 min-[0px]:mb-[5px]">
            <div>
              <img src={twitter} alt="search" className="w-18  mr-13" />
            </div>
            <p
              className={`font-spaceReg text-H4 ${
                !user.twitter_username && "opacity-50"
              }`}
            >
              {user.twitter_username ? (
                <a href={`https://twitter.com/${user.twitter_username}`}>
                  {user.twitter_username}
                </a>
              ) : (
                "Not Available"
              )}
            </p>
          </div>
          <div className="flex basis-2/4 min-[0px]:mb-[5px]">
            <div>
              <img src={website} alt="search" className="w-18 mr-13 " />
            </div>
            <p
              className={`font-spaceReg text-H4 ${!user.blog && "opacity-50"}`}
            >
              {user.blog ? (
                <a href={user.blog}>{user.blog}</a>
              ) : (
                "Not Available"
              )}
            </p>
          </div>
          <div className="flex w-2/4">
            <div>
              <img src={company} alt="search" className="w-18 mr-13 " />
            </div>
            <p
              className={`font-spaceReg text-H4 ${
                !user.company && "opacity-50"
              }`}
            >
              {user.company || "Not Available"}
            </p>
          </div>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;
