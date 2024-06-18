import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams, Link } from "react-router-dom";

const ViewStories = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState(id || "");
  const [statusFilter, setStatusFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setSelectedUser(id);
    }
  }, [id]);

  const handleUserChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);
    navigate(`/viewStories/${userId}`);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredUsers = selectedUser
    ? { [selectedUser]: users[selectedUser] }
    : users;

  const stories = Object.values(filteredUsers).reduce((acc, user) => {
    const filteredStories = (user.stories || []).filter(
      (story) => statusFilter === "All" || story.status === statusFilter
    );
    acc.push(
      ...filteredStories.map((story) => ({
        ...story,
        username: user.username,
        userId: user.id,
      }))
    );
    return acc;
  }, []);

  return (
    <div className="p-3">
      <div className="container mx-auto p-4 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-4">Stories</h1>
        <div className="flex items-center gap-3">
          <div className="mb-4">
            <label htmlFor="username" className="mr-2">
              Select User:
            </label>
            <select
              id="username"
              onChange={handleUserChange}
              value={selectedUser}
              className="border rounded p-2 bg-buttonColor"
            >
              {Object.entries(users).map(([userId, user]) => (
                <option key={userId} value={userId}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="mr-2">
              Status:
            </label>
            <select
              id="status"
              onChange={handleStatusChange}
              value={statusFilter}
              className="border rounded p-2 bg-buttonColor"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
        {stories.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Username</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Background Color</th>
                <th className="py-2 px-4 border">Thumbnail</th>
                <th className="py-2 px-4 border">Video</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {stories.map((story) => (
                <tr key={story.id}>
                  <td className="py-2 px-4 border">
                    <Link
                      to={`/userDetails/${story.id}`}
                      className="text-buttonsColor hover:underline"
                    >
                      {story.username}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border">{story.type}</td>
                  <td className="py-2 px-4 border">{story.description}</td>
                  <td className="py-2 px-4 border">{story.backgroundColor}</td>
                  <td className="py-2 px-4 border">
                    <img src={story.thumbnail} alt="thumbnail" width="50" />
                  </td>
                  <td className="py-2 px-4 border">
                    <video width="50" controls>
                      <source src={story.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </td>
                  <td className="py-2 px-4 border">{story.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 mt-4">No results found</p>
        )}
      </div>
    </div>
  );
};

export default ViewStories;
