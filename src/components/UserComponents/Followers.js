import React from "react";

const Followers = ({ user }) => {
  return (
    <div className="bg-lightGrey">
      {user && user.login && (
        <div className="flex">
          <div>
            <p className={"font-spaceReg text-H4"}>Repos</p>
            <p className={"font-spaceBold text-H2"}>{user.public_repos}</p>
          </div>
          <div>
            <p className={"font-spaceReg text-H4"}>Followers</p>
            <p className={"font-spaceBold text-H2"}>{user.followers}</p>
          </div>
          <div className={"font-spaceReg text-H4"}>
            <p>Following</p>
            <p className={"font-spaceBold text-H2"}>{user.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
