import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const {website, name} = user;
  return (
    <div style={{
        border: '2px solid green',
        padding: '10px',
        margin: '10px'
    }}>
      <h3>User Details here</h3>
      <h5>Name: {name}</h5>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
