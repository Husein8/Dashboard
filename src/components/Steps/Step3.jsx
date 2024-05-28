import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step3 = ({
  location,
  setLocation,
  handleNext,
  handleBack,
  handleSkip,
  validateStep,
}) => (
  <div className="w-full py-4 mb-4">
    <div className="flex justify-between items-center px-3 pt-3">
      <FaAngleLeft
        onClick={handleBack}
        className="text-2xl opacity-60 cursor-pointer"
      />{" "}
      <button onClick={handleSkip} className="text-gray-500 ">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mt-5 mb-4">Choose location</h2>
      <p className="mb-4">
        This will be shown to all users. Choose a wise user name like
        its_mike_here
      </p>
      <span className="mb-1">City</span>
      <input
        type="text"
        placeholder="Enter city"
        className="py-2 px-3 mb-2 border border-gray-300 rounded"
        value={location.city}
        onChange={(e) => setLocation({ ...location, city: e.target.value })}
      />
      <span className="mb-1">State</span>
      <input
        type="text"
        placeholder="Enter state"
        className="py-2 px-3 mb-2 border border-gray-300 rounded"
        value={location.state}
        onChange={(e) => setLocation({ ...location, state: e.target.value })}
      />
      <span className="mb-1">Country</span>
      <input
        type="text"
        placeholder="Enter country"
        className="py-2 px-3 mb-2 border border-gray-300 rounded"
        value={location.country}
        onChange={(e) => setLocation({ ...location, country: e.target.value })}
      />
      <button
        onClick={() => validateStep(3) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step3;
