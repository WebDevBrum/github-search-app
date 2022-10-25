import React from "react";

const Followers = ({ user }) => {
  return (
    <div className="bg-lightGrey">
      {user && user.login && (
        <div className="flex">
          <div>
            <p>Repos</p>
            <p>{user.public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{user.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{user.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
