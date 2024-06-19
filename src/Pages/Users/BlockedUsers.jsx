import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ViewBlockedUsers = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users[id];
  const blockedUsers = user.blockedUsers;

  return (
    <div className="p-3">
      <div className="container mx-auto p-4 rounded-md shadow-md bg-white">
        <h1 className="text-2xl font-bold mb-4">
          Users blocked by {user.username}
        </h1>
        <div className="overflow-x-auto">
          {blockedUsers.length > 0 ? (
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">#</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {blockedUsers.map((username, index) => {
                  const blockedUser = Object.values(users).find(
                    (u) => u.username === username
                  );
                  return (
                    <tr key={index}>
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">
                        <Link
                          className="text-buttonsColor"
                          to={`/userDetails/${Object.keys(users).find(
                            (key) =>
                              users[key].username === blockedUser.username
                          )}`}
                        >
                          {blockedUser.name}
                        </Link>
                      </td>
                      <td className="py-2 px-4">{blockedUser.username}</td>
                      <td className="py-2 px-4">
                        <Link
                          to={`/userDetails/${Object.keys(users).find(
                            (key) =>
                              users[key].username === blockedUser.username
                          )}`}
                        >
                          <button className="text-blue-400 hover:text-blue-500">
                            👁️
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-white bg-gray-800 p-4 rounded">
              No results found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBlockedUsers;
