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
          "#Gaming",
          "#Music",
          "#Book",
          "#Language",
          "#Photography",
          "#Fashion",
          "#Arts",
          "#Nature",
          "#Football",
          "#Politics",
          "#Finance",
          "#GYM",
          "#Business",
          "#Animal",
          "#Travel",
          "#Cars",
          "#Culture",
        ].map((interest) => (
          <button
            key={interest}
            onClick={() => {
              if (interests.includes(interest)) {
                setInterests(interests.filter((i) => i !== interest));
              } else {
                setInterests([...interests, interest]);
              }
            }}
            className={`flex items-center justify-center py-2 rounded-lg border  border-gray-300 ${
              interests.includes(interest) ? "bg-buttonNext text-white" : ""
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
      <button
        onClick={() => validateStep(4) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-lg w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step4;
