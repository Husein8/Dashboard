import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserReels = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(id);

  const user = users[selectedUserId];

  if (!user) {
    return <div className="text-red-500">User not found</div>;
  }

  const userReels = user.userReels;

  const handleUserChange = (event) => {
    const newUserId = event.target.value;
    setSelectedUserId(newUserId);
    navigate(`/userReels/${newUserId}`);
  };

  return (
    <div className="container mx-auto p-6 text-black rounded-md shadow-md bg-white my-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Reels for {user.name}</h1>
        <select
          value={selectedUserId}
          onChange={handleUserChange}
          className="text-black p-2 rounded"
        >
          {Object.keys(users).map((userId) => (
            <option key={userId} value={userId}>
              {users[userId].username}
            </option>
          ))}
        </select>
      </div>
      {userReels.length === 0 ? (
        <p className="text-center text-lg">No results found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-black rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Total Views</th>
                <th className="py-2 px-4 text-left">Total Likes</th>
                <th className="py-2 px-4 text-left">Total Comments</th>
                <th className="py-2 px-4 text-left">Total Shares</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {userReels.map((reel, index) => (
                <tr key={reel.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{reel.title}</td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/userDetails/${selectedUserId}`}
                      className="text-buttonsColor"
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td className="py-2 px-4">{reel.totalViews}</td>
                  <td className="py-2 px-4">{reel.totalLikes}</td>
                  <td className="py-2 px-4">{reel.totalComments}</td>
                  <td className="py-2 px-4">{reel.totalShares}</td>
                  <td className="py-2 px-4">{reel.status}</td>
                  <td className="py-2 px-4 text-center">{reel.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserReels;
