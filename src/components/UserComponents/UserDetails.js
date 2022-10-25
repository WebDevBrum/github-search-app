import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <>
          <p>{user.name ? user.name : user.login}</p>
          <p>@{user.login}</p>
          <p>{user.created_at}</p>
          <p>{user.bio}</p>
          <div>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
