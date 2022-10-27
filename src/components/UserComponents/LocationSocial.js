import React from "react";

const LocationSocial = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <div>
          <p className={"font-spaceReg text-H4"}>{user.location}</p>
          <p className={"font-spaceReg text-H4"}>{user.blog}</p>
          <p className={"font-spaceReg text-H4"}>
            {user.twitter_username || "Not Available"}
          </p>
          <p className={"font-spaceReg text-H4"}>{user.company}</p>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;
