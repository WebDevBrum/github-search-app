import React from "react";

const UserDetails = ({ user }) => {
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
            <h1 className="font-spaceBold text-H1">
              {user.name ? user.name : user.login}
            </h1>
            <p className="font-spaceReg mt-2 text-grey  text-BODY">
              {convertDate(user.created_at)}
            </p>
          </div>

          <p className="font-spaceReg text-blue mb-5 text-H3">@{user.login}</p>

          <p className={"font-spaceReg text-BODY h-8 mb-10 text-greyBlue"}>
            {user.bio}
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
