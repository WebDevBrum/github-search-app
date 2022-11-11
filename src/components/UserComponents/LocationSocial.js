import React from "react";

const LocationSocial = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <div className="flex flex-wrap text-greyBlue h-18">
          <div className="flex w-2/4">
            <p className={"font-spaceReg text-H4"}>{user.location}</p>
          </div>
          <div className="flex w-2/4">
            <p className={"font-spaceReg text-H4"}>
              {user.twitter_username || "Not Available"}
            </p>
          </div>
          <div className="flex w-2/4">
            <p className={"font-spaceReg text-H4"}>{user.blog}</p>
          </div>
          <div className="flex w-2/4">
            <p className={"font-spaceReg text-H4"}>{user.company}</p>
          </div>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;
