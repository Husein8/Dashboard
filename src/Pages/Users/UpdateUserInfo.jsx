import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const UpdateUserInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const user = users[id];
  const [formData, setFormData] = useState({
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
    const updatedUser = { ...user, ...formData };
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: updatedUser,
    }));
    navigate(`/userDetails/${id}`);
  };

  return (
    <div className="p-4">
      <div className="container mx-auto p-6 bg-white rounded-md shadow-md sm:mt-5">
        <h2 className="text-xl mb-3 font-medium">
          Update User: {user.username}
        </h2>
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
    </div>
  );
};

export default UpdateUserInfo;
