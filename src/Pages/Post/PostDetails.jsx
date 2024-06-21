import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const PostDetails = () => {
  const { userId, postIndex } = useParams();
  const { users } = useUserContext();
  const post = users[userId]?.posts[postIndex];
  const navigate = useNavigate();

  if (!post) {
    return <p className="text-center text-gray-500 my-4">Post not found</p>;
  }

  const handleUserClick = (userId) => {
    navigate(`/userDetails/${userId}`);
  };

  return (
    <div className="p-3">
      <div className="rounded-md shadow-md bg-white p-4">
        <h2 className="text-2xl mb-4">Post Detail</h2>
        <button className="bg-red-600 px-2 py-1 rounded-md text-white mb-4">
          {/* add some functionality later */}
          Block Post
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <table className="table-auto w-full mb-4">
              <tbody>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Title:</td>
                  <td className="py-2">{post.title}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Username:</td>
                  <td className="py-2">
                    <button
                      className="text-buttonsColor"
                      onClick={() => handleUserClick(userId)}
                    >
                      {users[userId].username}
                    </button>
                  </td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Total Views:</td>
                  <td className="py-2">{post.totalViews}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Total Likes:</td>
                  <td className="py-2">{post.totalLikes}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Popular Points:</td>
                  <td className="py-2">{post.popularPoints}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Total Comments:</td>
                  <td className="py-2">{post.totalComments}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Status:</td>
                  <td className="py-2">{post.status}</td>
                </tr>
                <tr className="border-b mb-2">
                  <td className="pr-4 py-2">Created At:</td>
                  <td className="py-2">{post.createdAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 w-full max-w-sm mx-auto"
              />
            )}
            <div className="mt-4">
              <p>{post.content}</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg mb-3">Comments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">#</th>
                  <th className="text-left p-2">User</th>
                  <th className="text-left p-2">Created At</th>
                  <th className="text-left p-2">Comment</th>
                </tr>
              </thead>
              <tbody>
                {post.comments.map((comment, index) => (
                  <tr key={index} className="border-b mb-2">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{comment.user}</td>
                    <td className="p-2">{comment.createdAt}</td>
                    <td className="p-2">{comment.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
