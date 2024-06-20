import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { users, setUsers } = useUserContext();
  const [selectedUser, setSelectedUser] = useState(""); // Set initial value to an empty string to represent "All"
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (userId, postIndex) => {
    const updatedUsers = { ...users };
    updatedUsers[userId].posts.splice(postIndex, 1);
    setUsers(updatedUsers);
  };

  const getFilteredPosts = () => {
    const allPosts = Object.entries(users).flatMap(([userId, user]) =>
      user.posts.map((post, index) => ({
        ...post,
        userId,
        username: user.username,
        postIndex: index,
      }))
    );

    return allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const posts =
    selectedUser === ""
      ? getFilteredPosts()
      : users[selectedUser]?.posts
          .map((post, index) => ({
            ...post,
            userId: selectedUser,
            username: users[selectedUser].username,
            postIndex: index,
          }))
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) || [];

  return (
    <div className="p-3">
      <div className="container mx-auto p-4 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="w-full md:w-auto">
            <label htmlFor="username" className="mr-2">
              Username:
            </label>
            <select
              id="username"
              onChange={handleUserChange}
              value={selectedUser}
              className="border rounded p-2 bg-buttonColor"
            >
              <option value="">All</option>
              {Object.keys(users).map((userId) => (
                <option key={userId} value={userId}>
                  {users[userId].username}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-auto">
            <label htmlFor="search" className="mr-2">
              Title:
            </label>
            <input
              type="text"
              id="search"
              onChange={handleSearchChange}
              value={searchTerm}
              className="border rounded p-2"
            />
          </div>
        </div>
        {posts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">#</th>
                  <th className="py-2 px-4 border">Title</th>
                  <th className="py-2 px-4 border">Username</th>
                  <th className="py-2 px-4 border">Total Views</th>
                  <th className="py-2 px-4 border">Total Likes</th>
                  <th className="py-2 px-4 border">Popular Point</th>
                  <th className="py-2 px-4 border">Total Comments</th>
                  <th className="py-2 px-4 border">Status</th>
                  <th className="py-2 px-4 border">Created At</th>
                  <th className="py-2 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border">{index + 1}</td>
                    <td className="py-2 px-4 border">{post.title}</td>
                    <td className="py-2 px-4 border">
                      <Link
                        to={`/userDetails/${post.userId}`}
                        className="text-buttonsColor"
                      >
                        {post.username}
                      </Link>
                    </td>
                    <td className="py-2 px-4 border">{post.totalViews}</td>
                    <td className="py-2 px-4 border">{post.totalLikes}</td>
                    <td className="py-2 px-4 border">{post.popularPoints}</td>
                    <td className="py-2 px-4 border">{post.totalComments}</td>
                    <td className="py-2 px-4 border">{post.status}</td>
                    <td className="py-2 px-4 border">{post.createdAt}</td>
                    <td className="py-2 px-4 border text-center">
                      <Link
                        to={`/postDetails/${post.userId}/${post.postIndex}`}
                        className="text-blue-500 hover:underline"
                      >
                        👁️
                      </Link>
                      <button
                        className="text-red-500 hover:underline ml-1"
                        onClick={() =>
                          handleDelete(post.userId, post.postIndex)
                        }
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 my-4">No posts found</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
