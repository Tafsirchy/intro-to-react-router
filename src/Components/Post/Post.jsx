import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }

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
                <button onClick={handleNavigate}>Details of: {id}</button>
            </h2>
        </div>
    );
};

export default Post;