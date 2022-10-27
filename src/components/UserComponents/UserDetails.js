import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <>
          <h1 className="font-spaceBold text-H1">
            {user.name ? user.name : user.login}
          </h1>
          <p className="font-spaceReg text-H3">@{user.login}</p>
          <p>{user.created_at}</p>
          <p className={"font-spaceReg text-BODY"}>{user.bio}</p>
          <div>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
