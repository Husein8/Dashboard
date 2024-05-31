import React, { useState } from "react";
import { useAdminSettings } from "../context/AdminSettingsContext.jsx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AdminSettings = () => {
  const { settings, toggleSetting, setBioMaxLength } = useAdminSettings();
  const [bioLength, setBioLength] = useState(settings.bioMaxLength);
  const navigate = useNavigate();

  const handleBioLengthChange = (e) => {
    const length = parseInt(e.target.value, 10);
    setBioLength(length);
    setBioMaxLength(length);
  };

  return (
    <div className="p-4 bg-adminSettings lg:pb-44 md:pt-6">
      <button
        onClick={() => navigate(-1)}
        className="text-xl px-2 absolute top-6 rounded-full hover:bg-gray-200 transition duration-300"
      >
        <FaArrowLeft />
      </button>
      <div className="flex flex-row items-center justify-evenly gap-2 pb-4">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
      </div>
      <div className="p-6 bg-white border rounded-lg shadow-lg space-y-4 sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
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
          <label className="mr-4">Location (State/City/Country)</label>
          <input
            type="checkbox"
            checked={settings.isLocationRequired}
            onChange={() => toggleSetting("isLocationRequired")}
          />
          <span className="ml-2 text-sm md:text-base">
            {settings.isLocationRequired
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
