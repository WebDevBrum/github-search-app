import React from "react";

const LocationSocial = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <div>
          <p>{user.location}</p>
          <p>{user.blog}</p>
          <p>{user.twitter_username || "Not Available"}</p>
          <p>{user.company}</p>

          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;