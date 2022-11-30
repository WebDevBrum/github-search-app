import React from "react";

const Followers = ({ user, mode }) => {
  return (
    <div
      className={`${
        mode === "light" ? "bg-lightGrey" : "bg-darkBlack"
      } rounded-buttons h-21 pl-8 sm:pr-22 min-[0px]:pr-4 mb-37 w-full`}
    >
      {user && user.login && (
        <div
          className={`${
            mode === "dark" && "text-darkWhite"
          } flex basis-full h-full min-[0px]:justify-around sm:justify-between  items-center`}
        >
          <div>
            <p
              className={`font-spaceReg min-[0px]:text-H6 sm:text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Repos
            </p>
            <p
              className={
                "font-spaceBold min-[0px]:text-H3 min-[0px]:text-center sm:text-left sm:text-H2"
              }
            >
              {user.public_repos}
            </p>
          </div>
          <div>
            <p
              className={`font-spaceReg min-[0px]:text-H6 sm:text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Followers
            </p>
            <p
              className={
                "font-spaceBold min-[0px]:text-center min-[0px]:text-H3 sm:text-H2"
              }
            >
              {user.followers}
            </p>
          </div>
          <div>
            <p
              className={`font-spaceReg min-[0px]:text-H6 sm:text-H4 ${
                mode === "light" ? "text-greyBlue" : "text-darkWhite"
              }`}
            >
              Following
            </p>
            <p
              className={
                "font-spaceBold min-[0px]:text-center min-[0px]:text-H3 sm:text-H2"
              }
            >
              {user.following}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
