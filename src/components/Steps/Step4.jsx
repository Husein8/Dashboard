import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step4 = ({
  interests,
  setInterests,
  handleNext,
  handleBack,
  handleSkip,
  validateStep,
}) => (
  <div className="w-full mb-4">
    <div className="flex justify-between items-center px-3 pt-7 pb-4">
      <FaAngleLeft
        onClick={handleBack}
        className="text-2xl opacity-60 cursor-pointer"
      />
      <button onClick={handleSkip} className="text-gray-500">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mb-4">Select your interest</h2>
      <p className="mb-4">
        Help us tailor your experience by selecting what you are interested in
      </p>
      <div className="grid grid-cols-2 gap-2">
        {[
          "Gaming",
          "Music",
          "Book",
          "Language",
          "Photography",
          "Fashion",
          "Arts",
          "Nature",
          "Football",
          "Politics",
          "Finance",
          "GYM",
          "Business",
          "Animal",
          "Travel",
          "Cars",
          "Culture",
        ].map((interest) => (
          <label
            key={interest}
            className={`flex items-center space-x-2 p-2 ${
              interests.includes(interest)
                ? "bg-green-500 text-white rounded"
                : ""
            }`}
          >
            <input
              type="checkbox"
              value={interest}
              checked={interests.includes(interest)}
              onChange={(e) => {
                if (e.target.checked) {
                  setInterests([...interests, interest]);
                } else {
                  setInterests(interests.filter((i) => i !== interest));
                }
              }}
              className="mr-2"
            />
            {interest}
          </label>
        ))}
      </div>
      <button
        onClick={() => validateStep(4) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step4;
