import React, { useState } from "react";

const generateUsers = (num) => {
  const users = [];
  for (let i = 1; i <= num; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      username: `user${i}`,
      email: `user${i}@gmail.com`,
      status: "Active",
      createdAt: new Date().toLocaleString(),
    });
  }
  return users;
};

const initialUsers = generateUsers(50);

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const usersPerPage = 20;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      user.username.toLowerCase().includes(searchUsername.toLowerCase()) &&
      user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">
                Name
                <input
                  type="text"
                  placeholder="Search Name"
                  className="mt-1 p-1 border border-gray-300 rounded w-full"
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </th>
              <th className="py-2 px-4 border">
                Username
                <input
                  type="text"
                  placeholder="Search Username"
                  className="mt-1 p-1 border border-gray-300 rounded w-full"
                  onChange={(e) => setSearchUsername(e.target.value)}
                />
              </th>
              <th className="py-2 px-4 border">
                Email
                <input
                  type="text"
                  placeholder="Search Email"
                  className="mt-1 p-1 border border-gray-300 rounded w-full"
                  onChange={(e) => setSearchEmail(e.target.value)}
                />
              </th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Created At</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border text-center">
                  {index + 1 + indexOfFirstUser}
                </td>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.username}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border text-center">{user.status}</td>
                <td className="py-2 px-4 border text-center">
                  {user.createdAt}
                </td>
                <td className="py-2 px-4 border text-center">
                  <button className="text-blue-500 hover:underline">👁️</button>
                  <button
                    className="text-red-500 hover:underline ml-1"
                    onClick={() => deleteUser(user.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(filteredUsers.length / usersPerPage)).keys()].map(
          (pageNumber) => (
            <button
              key={pageNumber + 1}
              onClick={() => paginate(pageNumber + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === pageNumber + 1
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {pageNumber + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Users;
