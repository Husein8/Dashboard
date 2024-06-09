import React, { useState } from "react";
import { Link } from "react-router-dom";

const usersData = [
  {
    id: 1,
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 4,
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 5,
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 6,
    name: "Frank Miller",
    username: "frank",
    email: "frank@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 7,
    name: "Grace Lee",
    username: "grace",
    email: "grace@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 8,
    name: "Hank Hill",
    username: "hank",
    email: "hank@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 9,
    name: "Ivy Green",
    username: "ivy",
    email: "ivy@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 10,
    name: "Jack White",
    username: "jack",
    email: "jack@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 11,
    name: "Karen Black",
    username: "karen",
    email: "karen@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 12,
    name: "Larry King",
    username: "larry",
    email: "larry@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 13,
    name: "Mona Lisa",
    username: "mona",
    email: "mona@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 14,
    name: "Nina Simone",
    username: "nina",
    email: "nina@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 15,
    name: "Oscar Wilde",
    username: "oscar",
    email: "oscar@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 16,
    name: "Paul Walker",
    username: "paul",
    email: "paul@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 17,
    name: "Quincy Jones",
    username: "quincy",
    email: "quincy@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 18,
    name: "Rachel Green",
    username: "rachel",
    email: "rachel@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 19,
    name: "Steve Rogers",
    username: "steve",
    email: "steve@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 20,
    name: "Tony Stark",
    username: "tony",
    email: "tony@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 20,
    name: "Tony Stark",
    username: "tony",
    email: "tony@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 20,
    name: "Tony Stark",
    username: "tony",
    email: "tony@gmail.com",
    status: "Active",
    createdAt: new Date().toLocaleString(),
  },
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
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
                  <Link
                    to={`/userDetails/${user.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    👁️
                  </Link>
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
