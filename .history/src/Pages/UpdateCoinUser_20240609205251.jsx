// UpdateCoinUser.jsx
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UpdateCoinUser = () => {
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const user = users[id];
  const [availableCoin, setAvailableCoin] = useState(user?.availableCoin || 0);
  const navigate = useNavigate();

  const handleCoinChange = (event) => {
    setAvailableCoin(event.target.value);
  };

  const handleUpdateCoin = () => {
    const updatedUsers = {
      ...users,
      [id]: { ...user, availableCoin: Number(availableCoin) },
    };
    setUsers(updatedUsers);
    navigate(`/userDetails/${id}`);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">
        Update Coin for User: {user.name}
      </h2>
      <div className="mb-4">
        {/* // UPDATE THIS */}
        {/* <tbody>
          <tr>
            <th className="py-2 px-4 border">Username</th>
            <td className="py-2 px-4 border">{user.username}</td>
          </tr>
          <tr>
            <th className="py-2 px-4 border">Email</th>
            <td className="py-2 px-4 border">{user.email}</td>
          </tr>
        </tbody> */}
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Available Coin
        </label>
        <input
          type="number"
          value={availableCoin}
          onChange={handleCoinChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        onClick={handleUpdateCoin}
        className="bg-buttonsColor text-white px-4 py-2 rounded"
      >
        Update Coin
      </button>
    </div>
  );
};

export default UpdateCoinUser;
