import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div style={{
            border: '2px solid purple',
            padding: '10px',
            margin: '10px',
        }}>
            <h2>
                <p>{id}</p>
                <h6>{title}</h6>
                <Link to={`/posts/${id}`}>
                <button>Show Details</button></Link>
            </h2>
        </div>
    );
};

export default Post;