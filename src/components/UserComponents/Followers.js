import React from "react";

const Followers = ({ user, mode }) => {
  return (
    <div
      className={`${
        mode === "light" ? "bg-lightGrey" : "bg-darkBlack"
      } rounded-buttons h-21 pl-8 pr-22 mb-37 w-full`}
    >
      {user && user.login && (
        <div
          className={`${
            mode === "dark" && "text-darkWhite"
          } flex basis-full h-full  justify-between items-center`}
        >
          <div>
            <p
              className={`font-spaceReg text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Repos
            </p>
            <p className={"font-spaceBold text-H2"}>{user.public_repos}</p>
          </div>
          <div>
            <p
              cclassName={`font-spaceReg text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Followers
            </p>
            <p className={"font-spaceBold text-H2"}>{user.followers}</p>
          </div>
          <div>
            <p
              className={`font-spaceReg text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Following
            </p>
            <p className={"font-spaceBold text-H2"}>{user.following}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
