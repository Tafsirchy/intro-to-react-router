import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyles = {
    border: "2px solid olive",
    borderRadius: '20px',
    padding: '10px',
    margin: '20px',

  };

  return (
    <div style={userStyles}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>
        <small>{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
