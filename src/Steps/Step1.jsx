import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step1 = ({
  profile,
  setProfile,
  handleNext,
  goingBack,
  handleSkip,
  validateStep,
}) => (
  <div className="w-full rounded mb-4">
    <div className="flex justify-between pt-7 px-2">
      <FaAngleLeft
        onClick={goingBack}
        className="text-2xl opacity-50 cursor-pointer"
      />
      <button onClick={handleSkip} className="text-gray-500">
        Skip
      </button>
    </div>
    <div className="flex flex-col items-start p-4 mt-4">
      <h2 className="font-bold text-lg mb-4">Add your profile name</h2>
      <p className="mb-8 text-base">
        Add your name so friends on SayHi can find you easily
      </p>
      <span className="font-semibold mb-1">First name</span>
      <input
        type="text"
        placeholder="Enter first name"
        className="py-2 px-3 mb-4 w-full border border-gray-300 rounded"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <span className="mb-1 font-semibold">Last name</span>
      <input
        type="text"
        placeholder="Enter last name"
        className="py-2 px-3 mb-2 w-full border border-gray-300 rounded"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <button
        onClick={() => validateStep(1) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step1;
