import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step6 = ({
  bio,
  setBio,
  handleNext,
  handleBack,
  handleSkip,
  validateStep,
  showFindFriends,
  setShowFindFriends,
}) => (
  <div className="w-full py-4 mb-4">
    <div className="flex justify-between items-center px-2 pt-3">
      <FaAngleLeft
        onClick={handleBack}
        className="text-2xl opacity-60 cursor-pointer"
      />
      <button onClick={handleSkip} className="text-gray-500 ">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mt-6 mb-4">Add a bio</h2>
      <textarea
        placeholder="Write a short bio about yourself"
        className="py-2 px-3 mb-2 border border-gray-300 rounded"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        maxLength={250}
      />
      <h2 className="font-bold text-xl mb-4 mt-4">Find friends on contact</h2>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showFindFriends}
          onChange={() => setShowFindFriends(!showFindFriends)}
        />

        <p>{showFindFriends ? "Close the list" : "Check ur friends"}</p>
        {showFindFriends ? (
          <>
            <div>Find friends here</div>
          </>
        ) : (
          ""
        )}
      </label>
      <button
        onClick={() => validateStep(6) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step6;
