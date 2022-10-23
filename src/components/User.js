import React from "react";
import Followers from "./UserComponents/Followers";
import LocationSocial from "./UserComponents/LocationSocial";
import UserDetails from "./UserComponents/UserDetails";

const User = ({ user }) => {
  return (
    <section>
      <UserDetails user={user} />
      <Followers user={user} />
      <LocationSocial user={user} />
    </section>
  );
};

export default User;
