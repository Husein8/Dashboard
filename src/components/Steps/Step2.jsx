import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step2 = ({
  selectedGender,
  setSelectedGender,
  handleNext,
  handleBack,
  handleSkip,
}) => (
  <div className="w-full p-2 mb-4">
    <div className="flex justify-between items-center px-1">
      <FaAngleLeft onClick={handleBack} className="text-2xl opacity-60" />
      <button onClick={handleSkip} className="text-gray-500">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-2">
      <h2 className="font-bold text-xl mt-5 mb-4">Select gender</h2>
      <p className="mb-4 text-sm w-full">
        This will be shown to all users. Choose a wise user name like
        its_mike_here
      </p>
      {["Male", "Female", "Prefer not say", "Custom"].map((gender) => (
        <div
          key={gender}
          className={`flex items-center p-4 border rounded-lg ${
            selectedGender === gender
              ? "bg-green-100 border-green-400"
              : "border-gray-300"
          }`}
          onClick={() => setSelectedGender(gender)}
        >
          <span
            className={`flex-grow ${
              selectedGender === gender ? "text-green-500" : "text-black"
            }`}
          >
            {gender}
          </span>
          <input
            type="radio"
            name="gender"
            value={gender}
            checked={selectedGender === gender}
            onChange={() => setSelectedGender(gender)}
            className="form-radio text-green-500"
          />
        </div>
      ))}
      <button
        onClick={handleNext}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step2;
