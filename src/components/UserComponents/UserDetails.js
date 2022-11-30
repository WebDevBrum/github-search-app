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
          <div className="flex flex-wrap  justify-between align-middle mb-5">
            <div className="flex  w-full">
              <div className="min-[0px]:w-[94px] min-[0px]:mr-[19px] sm:mr-[0px] sm:w-98">
                <img
                  className="rounded-full min-[0px]:w-[70px] sm:w-29 sm:h-29  "
                  src={user.avatar_url}
                ></img>
              </div>

              <div className="flex flex-wrap w-full justify-between">
                <div>
                  <h1
                    className={`font-spaceBold sm:text-H1 min-[10px]:text-H3 ${
                      mode === "dark" && "text-darkWhite"
                    }`}
                  >
                    {user.name && user.name.length > 0 ? user.name : user.login}
                  </h1>
                  <p className="font-spaceReg text-blue  text-H3">
                    @{user.login}
                  </p>
                </div>

                <p
                  className={`font-spaceReg mt-2  text-BODY ${
                    mode === "light" ? "text-grey" : "text-darkWhite"
                  }`}
                >
                  {convertDate(user.created_at)}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
