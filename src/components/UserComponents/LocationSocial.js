import React from "react";
import search from "../../assets/icon-location.svg";
import company from "../../assets/icon-company.svg";
import website from "../../assets/icon-website.svg";
import twitter from "../../assets/icon-twitter.svg";

const LocationSocial = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <div className="flex flex-wrap text-greyBlue h-18">
          <div className="flex w-2/4">
            <div>
              <img src={search} alt="search" className="w-18  mr-13" />
            </div>
            <p className={"font-spaceReg text-H4"}>{user.location}</p>
          </div>
          <div className="flex w-2/4">
            <div>
              <img src={twitter} alt="search" className="w-18  mr-13" />
            </div>
            <p className={"font-spaceReg text-H4"}>
              {user.twitter_username || "Not Available"}
            </p>
          </div>
          <div className="flex w-2/4">
            <div>
              <img src={website} alt="search" className="w-18 mr-13 " />
            </div>
            <p className={"font-spaceReg text-H4"}>{user.blog}</p>
          </div>
          <div className="flex w-2/4">
            <div>
              <img src={company} alt="search" className="w-18 mr-13 " />
            </div>
            <p className={"font-spaceReg text-H4"}>{user.company}</p>
          </div>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;
