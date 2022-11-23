import React from "react";

const UserDetails = ({ user, mode }) => {
  const removeFirstWord = (str) => {
    const indexOfSpace = str.indexOf(" ");

    if (indexOfSpace === -1) {
      return "";
    }

    return str.substring(indexOfSpace + 1);
  };

  const convertDate = (date) => {
    let dateC = new Date(date);
    const dateString = dateC.toDateString();

    const formatted = removeFirstWord(dateString);

    return formatted;
  };

  return (
    <div>
      {user && user.login && (
        <>
          <div className="flex justify-between align-middle">
            <h1
              className={`font-spaceBold text-H1 ${
                mode === "dark" && "text-darkWhite"
              }`}
            >
              {user.name && user.name.length > 0 ? user.name : user.login}
            </h1>
            <p
              className={`font-spaceReg mt-2  text-BODY ${
                mode === "light" ? "text-grey" : "text-darkWhite"
              }`}
            >
              {convertDate(user.created_at)}
            </p>
          </div>

          <p className="font-spaceReg text-blue mb-5 text-H3">@{user.login}</p>

          <p
            className={`font-spaceReg text-BODY h-8 mb-10 ${
              mode === "light" ? "text-greyBlue" : "text-darkWhite"
            } ${user.bio && user.bio.length > 0 ? "" : "opacity-50"}`}
          >
            {user.bio && user.bio.length > 0
              ? user.bio
              : "This profile has no bio"}
          </p>
          <div>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
