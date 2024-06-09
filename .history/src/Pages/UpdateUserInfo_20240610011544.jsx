// UpdateUser.js

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const userDetailsData = {
  1: {
    username: "alice",
    email: "alice@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  2: {
    username: "bob",
    email: "bob@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  3: {
    username: "charlie",
    email: "charlie@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  4: {
    username: "diana",
    email: "diana@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  5: {
    username: "eve",
    email: "eve@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",

    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  6: {
    username: "frank",
    email: "frank@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  7: {
    username: "grace",
    email: "grace@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  8: {
    username: "hank",
    email: "hank@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  9: {
    username: "ivy",
    email: "ivy@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    loginMode: "social",
    deviceType: "iOS",
    deviceModel: "Rosemary’s iPhone",
    loggedAt: "04/06/2024 10:35 AM",
    loginIp: "64.44.177.36",
  },
  10: {
    username: "jack",
    email: "jack@gmail.com",
    status: "Active",
    isVerified: false,
    country: "United States of America",
    state: "state",
    city: "city",
    isPhoneVerified: false,
    isEmailVerified: true,
    bio: "",
    availableCoin: 0,
    lastActive: "04/06/2024 10:35 AM",
    createdDate: "04/06/2024 10:35 AM",
    image: "",
    // loginMode: "social",
    // deviceType: "iOS",
    // deviceModel: "Rosemary’s iPhone",
    // loggedAt: "04/06/2024 10:35 AM",
    // loginIp: "64.44.177.36",
  },
};

const UpdateUserInfo = () => {
  const { id } = useParams();
  const user = userDetailsData[id];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    status: user.status,
    isVerified: user.isVerified,
    image: user.image,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Updated user data:", formData);
    navigate(`/userDetails/${id}`);
  };

  return (
    <div className="container mx-auto p-4 bg-icons sm:mt-5">
      <h2 className="text-xl mb-3 font-medium">Update User: {user.name}</h2>
      <div className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-slate-700 border-opacity-25 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-slate-700 border-opacity-25 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-slate-700 border-opacity-25 px-3 py-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Approval Pending">Approval Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Is Verified?</label>
          <select
            name="isVerified"
            value={formData.isVerified ? "Yes" : "No"}
            onChange={(e) =>
              setFormData({
                ...formData,
                isVerified: e.target.value === "Yes",
              })
            }
            className="w-full border border-slate-700 border-opacity-25 px-3 py-2 rounded"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
