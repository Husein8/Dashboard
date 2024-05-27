import React from "react";

const Step6 = ({
  profile,
  selectedGender,
  location,
  interests,
  photo,
  handleBack,
  handleNext,
}) => (
  <div className="w-full mb-4">
    <div className="flex justify-between items-center p-4">
      <button onClick={handleBack} className="text-blue-500 underline">
        Back
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mb-4">Review your profile</h2>
      <p className="mb-4">Please review your profile information</p>
      <div className="flex flex-col mb-4">
        <h3 className="font-semibold">Name</h3>
        <p>
          {profile.firstName} {profile.lastName}
        </p>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="font-semibold">Gender</h3>
        <p>{selectedGender}</p>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="font-semibold">Location</h3>
        <p>
          {location.city}, {location.state}, {location.country}
        </p>
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="font-semibold">Interests</h3>
        <p>{interests.join(", ")}</p>
      </div>
      {photo && (
        <div className="flex flex-col mb-4">
          <h3 className="font-semibold">Profile Photo</h3>
          <img
            src={URL.createObjectURL(photo)}
            alt="Profile"
            className="w-32 h-32 object-cover"
          />
        </div>
      )}
      <button
        onClick={handleNext}
        className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4"
      >
        Submit
      </button>
    </div>
  </div>
);

export default Step6;
