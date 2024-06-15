import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserLive = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(id);

  const user = users[selectedUserId];

  if (!user) {
    return <div className="text-red-500">User not found</div>;
  }

  const userLiveHistory = user.userLive;

  const handleUserChange = (event) => {
    const newUserId = event.target.value;
    setSelectedUserId(newUserId);
    navigate(`/userLive/${newUserId}`);
  };

  return (
    <div className="container mx-auto p-6 text-black rounded-md shadow-md bg-white my-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          User Live History for {user.name}
        </h1>
        <select
          value={selectedUserId}
          onChange={handleUserChange}
          className="text-black p-2 rounded "
        >
          {Object.keys(users).map((userId) => (
            <option key={userId} value={userId}>
              {users[userId].username}
            </option>
          ))}
        </select>
      </div>
      {userLiveHistory.length === 0 ? (
        <p className="text-center text-lg">No results found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-black rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Start Time</th>
                <th className="py-2 px-4 text-left">End Time</th>
                <th className="py-2 px-4 text-left">Total Time</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {userLiveHistory.map((entry, index) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/userDetails/${entry.id}`}
                      className="text-buttonsColor hover:underline"
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td className="py-2 px-4">{entry.startTime}</td>
                  <td className="py-2 px-4">{entry.endTime}</td>
                  <td className="py-2 px-4">{entry.totalTime}</td>
                  <td className="py-2 px-4 text-center">{entry.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserLive;
