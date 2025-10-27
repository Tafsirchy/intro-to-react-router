import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "1px solid black",
        margin: "auto",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h6>{title}</h6>
      <p>{body}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
