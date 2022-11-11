import React from "react";

const Followers = ({ user }) => {
  return (
    <div className="bg-lightGrey rounded-buttons h-21 pl-8 pr-22 mb-37">
      {user && user.login && (
        <div className="flex w-4/4 h-full  justify-between items-center">
          <div>
            <p className={"font-spaceReg text-H4 text-greyBlue"}>Repos</p>
            <p className={"font-spaceBold text-H2"}>{user.public_repos}</p>
          </div>
          <div>
            <p className={"font-spaceReg text-H4 text-greyBlue"}>Followers</p>
            <p className={"font-spaceBold text-H2"}>{user.followers}</p>
          </div>
          <div className={"font-spaceReg text-H4 "}>
            <p className="text-greyBlue">Following</p>
            <p className={"font-spaceBold text-H2"}>{user.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
