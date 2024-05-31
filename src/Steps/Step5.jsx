import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const Step5 = ({
  photo,
  setPhoto,
  handleNext,
  handleBack,
  handleSkip,
  validateStep,
}) => (
  <div className="w-full py-5 mb-4">
    <div className="flex justify-between items-center px-4 pt-2">
      <FaAngleLeft
        onClick={handleBack}
        className="text-2xl opacity-60 cursor-pointer"
      />
      <button onClick={handleSkip} className="text-gray-500 ">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mt-5 mb-4">Upload a photo</h2>
      <p className="mb-4">
        Upload a profile picture so your friends can recognize you
      </p>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      {photo && (
        <img src={URL.createObjectURL(photo)} alt="Profile" className="mt-4" />
      )}
      <button
        onClick={() => validateStep(5) && handleNext()}
        className="bg-buttonNext text-white py-2 px-4 rounded-3xl w-full mt-20"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step5;
