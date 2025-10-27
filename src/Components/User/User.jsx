import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json());

  const [showInfo, setShowInfo] = useState(false)

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
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
      {showInfo && (
        <Suspense fallback={<p>Loading...</p>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
    </div>
  );
};

export default User;
