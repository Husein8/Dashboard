// UserDetails.jsx
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users[id];
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/update/${id}`);
  };

  const handleUpdateCoinClick = () => {
    navigate(`/update-coin/${id}`);
  };

  const handleDeleteClick = () => {
    // Logic to delete the user
    console.log(`User with ID ${id} deleted`);
    navigate("/users");
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">User Detail: {user.name}</h2>
      <div className="mt-4">
        <button
          onClick={handleUpdateClick}
          className="mr-2 bg-buttonsColor text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={handleDeleteClick}
          className="mr-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={handleUpdateCoinClick}
          className="bg-buttonsColor text-white px-4 py-2 rounded"
        >
          Update Coin
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <tbody>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <td className="py-2 px-4 border">{user.name}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Username</th>
              <td className="py-2 px-4 border">{user.username}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Email</th>
              <td className="py-2 px-4 border">{user.email}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Status</th>
              <td className="py-2 px-4 border">{user.status}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Verified?</th>
              <td className="py-2 px-4 border">
                {user.isVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Country</th>
              <td className="py-2 px-4 border">{user.country}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">State</th>
              <td className="py-2 px-4 border">{user.state}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">City</th>
              <td className="py-2 px-4 border">{user.city}</td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Phone Verified?</th>
              <td className="py-2 px-4 border">
                {user.isPhoneVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Is Email Verified?</th>
              <td className="py-2 px-4 border">
                {user.isEmailVerified ? "Yes" : "No"}
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border">Bio</th>
              <td className="py-2 px-4 border">
                {user.bio ? user.bio : "not set"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" bg-white">
          <h2 className="mt-5">User login detail:</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <tbody>
              <tr>
                <th className="py-2 px-4 border">Available Coin</th>
                <td className="py-2 px-4 border">{user.availableCoin}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Last Active</th>
                <td className="py-2 px-4 border">{user.lastActive}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Created date</th>
                <td className="py-2 px-4 border">{user.createdDate}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Image</th>
                <td className="py-2 px-4 border">
                  {user.image ? user.image : "not set"}
                </td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Login Mode</th>
                <td className="py-2 px-4 border">{user.loginMode}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Device Type</th>
                <td className="py-2 px-4 border">{user.deviceType}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Device Model</th>
                <td className="py-2 px-4 border">{user.deviceModel}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Logged At</th>
                <td className="py-2 px-4 border">{user.loggedAt}</td>
              </tr>
              <tr>
                <th className="py-2 px-4 border">Login IP</th>
                <td className="py-2 px-4 border">{user.loginIp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
