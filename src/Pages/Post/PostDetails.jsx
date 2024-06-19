import React from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const PostDetails = () => {
  const { userId, postIndex } = useParams();
  const { users } = useUserContext();
  const post = users[userId]?.posts[postIndex];

  if (!post) {
    return <p className="text-center text-gray-500 my-4">Post not found</p>;
  }

  return (
    <div className="p-3">
      <div className="container mx-auto p-4 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>
          <strong>Username:</strong> {users[userId].username}
        </p>
        <p>
          <strong>Total Views:</strong> {post.totalViews}
        </p>
        <p>
          <strong>Total Likes:</strong> {post.totalLikes}
        </p>
        <p>
          <strong>Popular Points:</strong> {post.popularPoints}
        </p>
        <p>
          <strong>Total Comments:</strong> {post.totalComments}
        </p>
        <p>
          <strong>Status:</strong> {post.status}
        </p>
        <p>
          <strong>Created At:</strong> {post.createdAt}
        </p>
        <div className="mt-4">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
