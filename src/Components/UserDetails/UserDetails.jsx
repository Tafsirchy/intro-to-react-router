import React from 'react';

const UserDetails = ({user}) => {
    const {name, username, address: {street, suite, city}}= user;
    return (
        <div>
            <h3>Name: </h3>
            <h4>Username: </h4>
            <div>
                <h3>Address: </h3>
                <p>Street: </p>
                <p>Suite: </p>
                <p>City: </p>
            </div>
            <p><small>Website: </small></p>
        </div>
    );
};

export default UserDetails;