import React from "react";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const PostDetails = () => {
  const { userId, postIndex } = useParams();
  const { users } = useUserContext();
  const post = users[userId]?.posts[postIndex];

  if (!post) {
    return <p className="text-center text-gray-500 my-4">Post not found</p>;
  }

  return (
    <div className="p-3 ">
      <div className="rounded-md shadow-md bg-white p-4">
        <Link>
          <button className="bg-red-600 p-2 rounded-md text-white mb-2">
            Block Post
          </button>
        </Link>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>
                    <strong>Title:</strong>
                  </td>
                  <td>{post.title}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Username:</strong>
                  </td>
                  <td>{users[userId].username}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Views:</strong>
                  </td>
                  <td>{post.totalViews}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Likes:</strong>
                  </td>
                  <td>{post.totalLikes}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Popular Points:</strong>
                  </td>
                  <td>{post.popularPoints}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Comments:</strong>
                  </td>
                  <td>{post.totalComments}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Status:</strong>
                  </td>
                  <td>{post.status}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Created At:</strong>
                  </td>
                  <td>{post.createdAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-1">
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
        <div>
          <h2 className="text-lg mt-6 mb-3">Comments</h2>
          <div>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>
                    <strong>Title:</strong>
                  </td>
                  <td>{post.title}</td>
                </tr>

                <tr>
                  <td>
                    <strong>Total Views:</strong>
                  </td>
                  <td>{post.totalViews}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
