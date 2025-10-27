// import React, { use } from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div>
      {
        users.map((user) => <User key={user.id} user={user}></User>)
      },
      {/* {
        users.map((user) => <UserDetails key={user.id} user={user}></UserDetails>)
      } */}
    </div>
  );
};

export default Users;
