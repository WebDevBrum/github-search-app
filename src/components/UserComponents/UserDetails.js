import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      {user && user.login && (
        <>
          <p>{user.avatar_url}</p>
          <p>{user.name ? user.name : user.login}</p>
          <p>@{user.login}</p>
          <div>
            <p></p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
