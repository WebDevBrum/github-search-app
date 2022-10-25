import React from "react";
import Followers from "./UserComponents/Followers";
import LocationSocial from "./UserComponents/LocationSocial";
import UserDetails from "./UserComponents/UserDetails";

const User = ({ user }) => {
  return (
    <section className="bg-white flex w-3/4">
      <div>
        <img src={user.avatar_url}></img>
      </div>
      <div>
        <UserDetails user={user} />
        <Followers user={user} />
        <LocationSocial user={user} />
      </div>
    </section>
  );
};

export default User;
