import React, { use } from 'react';
// import { useLoaderData } from 'react-router';

const Users2 = ({ usersPromise }) => {
  const users2 = use(usersPromise);
  console.log(users2);
  return (
    <div>
      <h2>Here is the users 2</h2>
    </div>
  );
};

export default Users2;