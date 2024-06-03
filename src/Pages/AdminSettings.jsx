import React, { useState } from "react";
import { useAdminSettings } from "../context/AdminSettingsContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminSettings = () => {
  const {
    settings,
    toggleSetting,
    setBioMaxLength,
    addInterest,
    removeInterest,
  } = useAdminSettings();
  const [bioLength, setBioLength] = useState(settings.bioMaxLength);
  const [newInterest, setNewInterest] = useState("");
  const navigate = useNavigate();

  const handleBioLengthChange = (e) => {
    const length = parseInt(e.target.value, 10);
    setBioLength(length);
    setBioMaxLength(length);
  };

  const handleAddInterest = () => {
    if (newInterest) {
      addInterest(newInterest);
      setNewInterest("");
    }
  };

  const handleRemoveInterest = (interest) => {
    removeInterest(interest);
  };

  return (
    <div className="p-4 lg:pb-9 md:pt-6">
      <div className="flex flex-row items-center justify-evenly gap-2 pb-4">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
      </div>
      <div className="p-6 bg-white border rounded-lg shadow-lg space-y-4 mx-auto">
        <div className="flex items-center">
          <label className="mr-4">First Name</label>
          <input
            type="checkbox"
            checked={settings.isFirstNameRequired}
            onChange={() => toggleSetting("isFirstNameRequired")}
          />
          <span className="ml-2">
            {settings.isFirstNameRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Last Name</label>
          <input
            type="checkbox"
            checked={settings.isLastNameRequired}
            onChange={() => toggleSetting("isLastNameRequired")}
          />
          <span className="ml-2">
            {settings.isLastNameRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Gender</label>
          <input
            type="checkbox"
            checked={settings.isGenderRequired}
            onChange={() => toggleSetting("isGenderRequired")}
          />
          <span className="ml-2">
            {settings.isGenderRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">State</label>
          <input
            type="checkbox"
            checked={settings.isStateRequired}
            onChange={() => toggleSetting("isStateRequired")}
          />
          <span className="ml-2">
            {settings.isStateRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">City</label>
          <input
            type="checkbox"
            checked={settings.isCityRequired}
            onChange={() => toggleSetting("isCityRequired")}
          />
          <span className="ml-2">
            {settings.isCityRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Country</label>
          <input
            type="checkbox"
            checked={settings.isCountryRequired}
            onChange={() => toggleSetting("isCountryRequired")}
          />
          <span className="ml-2">
            {settings.isCountryRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Interests</label>
          <input
            type="checkbox"
            checked={settings.isInterestsRequired}
            onChange={() => toggleSetting("isInterestsRequired")}
          />
          <span className="ml-2">
            {settings.isInterestsRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            className="border rounded p-1 mr-2"
            placeholder="Add interest"
          />
          <button
            onClick={handleAddInterest}
            className="p-1 bg-blue-500 text-black rounded"
          >
            Add
          </button>
        </div>
        <div className="space-y-2">
          {settings.interestsList &&
            settings.interestsList.map((interest) => (
              <div key={interest} className="flex items-center gap-4">
                <span>{interest}</span>
                <button
                  onClick={() => handleRemoveInterest(interest)}
                  className="p-1 bg-red-500 text-white rounded"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
        </div>
        <div className="flex items-center">
          <label className="mr-4">Photo</label>
          <input
            type="checkbox"
            checked={settings.isPhotoRequired}
            onChange={() => toggleSetting("isPhotoRequired")}
          />
          <span className="ml-2">
            {settings.isPhotoRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Bio</label>
          <input
            type="checkbox"
            checked={settings.isBioRequired}
            onChange={() => toggleSetting("isBioRequired")}
          />
          <span className="ml-2">
            {settings.isBioRequired
              ? "Now it is required"
              : "Now it is optional"}
          </span>
        </div>
        <div className="flex items-center">
          <label className="mr-4">Bio Max Length</label>
          <input
            type="number"
            value={bioLength}
            onChange={handleBioLengthChange}
            className="border rounded p-1 w-20"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-4">Find Friends on Contact</label>
          <input
            type="checkbox"
            checked={settings.isFindFriendsVisible}
            onChange={() => toggleSetting("isFindFriendsVisible")}
          />
          <span className="ml-2">
            {settings.isFindFriendsVisible ? "Visible" : "Hidden"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
