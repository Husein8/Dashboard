import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const userDetailsData = {
  1: {
    name: "Alice Smith",
    username: "alice",
    email: "alice@gmail.com",
    availableCoin: 0,
  },
  2: {
    name: "Bob Johnson",
    username: "bob",
    email: "bob@gmail.com",
    availableCoin: 0,
  },
  3: {
    name: "Charlie Brown",
    username: "charlie",
    email: "charlie@gmail.com",
    availableCoin: 0,
  },
  4: {
    name: "Diana Prince",
    username: "diana",
    email: "diana@gmail.com",
    availableCoin: 0,
  },
  5: {
    name: "Eve Adams",
    username: "eve",
    email: "eve@gmail.com",
    availableCoin: 0,
  },
};

const UpdateCoinUser = () => {
  const { id } = useParams();
  const user = userDetailsData[id];
  const [coinChange, setCoinChange] = useState(0);
  const navigate = useNavigate();

  const handleCoinChange = (event) => {
    setCoinChange(parseInt(event.target.value, 10));
  };

  const handleSaveClick = () => {
    // Update the user's coin balance
    user.availableCoin += coinChange;
    console.log(`User with ID ${id} now has ${user.availableCoin} coins`);
    navigate(`/users/${id}`);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-3 font-medium">Update Coin for: {user.name}</h2>
      <div className="mt-4">
        <div className="mb-4">
          <label className="block mb-2">Username: {user.username}</label>
          <label className="block mb-2">Email: {user.email}</label>
          <label className="block mb-2">
            Available Coin: {user.availableCoin}
          </label>
          <input
            type="number"
            value={coinChange}
            onChange={handleCoinChange}
            className="border rounded px-2 py-1"
          />
        </div>
        <button
          onClick={handleSaveClick}
          className="bg-buttonsColor text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateCoinUser;
