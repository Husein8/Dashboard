import React from "react";

const Step5 = ({ setPhoto, handleNext, handleBack, handleSkip }) => (
  <div className="w-full mb-4">
    <div className="flex justify-between items-center p-4">
      <button onClick={handleBack} className="text-blue-500 underline">
        Back
      </button>
      <button onClick={handleSkip} className="text-blue-500 underline">
        Skip
      </button>
    </div>
    <div className="flex flex-col p-4">
      <h2 className="font-bold text-xl mb-4">Add profile photo</h2>
      <p className="mb-4">
        Help us tailor your experience by selecting what you are interested in
      </p>
      <div className="flex flex-col">
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="mb-4"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step5;
