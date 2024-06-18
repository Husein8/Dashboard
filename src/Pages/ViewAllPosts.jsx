import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewAllPosts = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useState(
    id || Object.keys(users)[0]
  );
  const [searchTitle, setSearchTitle] = useState("");

  const user = users[selectedUserId];

  if (!user) {
    return <div>User not found</div>;
  }

  const { posts } = user;

  const handleUserChange = (event) => {
    setSelectedUserId(event.target.value);
    navigate(`/view-all-posts/${event.target.value}`);
  };

  const handleSearchChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const filteredPosts = Array.isArray(posts)
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTitle.toLowerCase())
      )
    : [];

  return (
    <div className="p-3">
      <div className="container mx-auto p-4 rounded-md shadow-md bg-white">
        <h2 className="text-xl mb-3 font-medium">Posts</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search Title"
            value={searchTitle}
            onChange={handleSearchChange}
            className="border p-2 mr-3 mb-2"
          />
          <select
            value={selectedUserId}
            onChange={handleUserChange}
            className="border p-2"
          >
            {Object.keys(users).map((id) => (
              <option key={id} value={id}>
                {users[id].username}
              </option>
            ))}
          </select>
        </div>
        <div
          className="text-buttonsColor inline cursor-pointer text-xl"
          onClick={() => navigate(`/userdetails/${selectedUserId}`)}
        >
          {user.username}
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Username</th>
                <th className="py-2 px-4 border">Total Views</th>
                <th className="py-2 px-4 border">Total Likes</th>
                <th className="py-2 px-4 border">Popular Points</th>
                <th className="py-2 px-4 border">Total Comments</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Created At</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="py-2 px-4 border">{post.title}</td>
                    <td className="py-2 px-4 border">{user.username}</td>
                    <td className="py-2 px-4 border">{post.totalViews}</td>
                    <td className="py-2 px-4 border">{post.totalLikes}</td>
                    <td className="py-2 px-4 border">{post.popularPoints}</td>
                    <td className="py-2 px-4 border">{post.totalComments}</td>
                    <td className="py-2 px-4 border">{post.status}</td>
                    <td className="py-2 px-4 border">{post.createdAt}</td>
                    <td className="py-2 px-4 border text-center">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-blue-500 cursor-pointer mx-1"
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 cursor-pointer mx-1"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4 border" colSpan="9">
                    No posts available for {user.username}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPosts;
