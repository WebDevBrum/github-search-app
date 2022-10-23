import React from "react";

const LocationSocial = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <div>
          <p>{user.location}</p>
          <p>{user.blog}</p>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default LocationSocial;
