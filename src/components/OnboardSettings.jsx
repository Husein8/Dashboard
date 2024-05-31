import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";
import Step6 from "../Steps/Step6";

const OnboardSettings = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({ firstName: "", lastName: "" });
  const [selectedGender, setSelectedGender] = useState("Male");
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [interests, setInterests] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [bio, setBio] = useState("");
  const [showFindFriends, setShowFindFriends] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    } else {
      console.log("Final Submission: ", {
        profile,
        selectedGender,
        location,
        interests,
        photo,
        bio,
      });
      goingBack();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("dashboard");
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const goingBack = () => {
    navigate(-1);
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return profile.firstName !== "" && profile.lastName !== "";
      case 2:
        return selectedGender !== "";
      case 3:
        return (
          location.city !== "" &&
          location.state !== "" &&
          location.country !== ""
        );
      case 4:
        return interests.length > 0;
      case 5:
        return photo !== null;
      case 6:
        return bio !== "";
      default:
        return false;
    }
  };

  const steps = [
    <Step1
      key="step1"
      profile={profile}
      setProfile={setProfile}
      handleNext={handleNext}
      goingBack={goingBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
    />,
    <Step2
      key="step2"
      selectedGender={selectedGender}
      setSelectedGender={setSelectedGender}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
    />,
    <Step3
      key="step3"
      location={location}
      setLocation={setLocation}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
    />,
    <Step4
      key="step4"
      interests={interests}
      setInterests={setInterests}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
    />,
    <Step5
      key="step5"
      photo={photo}
      setPhoto={setPhoto}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
    />,
    <Step6
      key="step6"
      bio={bio}
      setBio={setBio}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      validateStep={validateStep}
      showFindFriends={showFindFriends}
      setShowFindFriends={setShowFindFriends}
    />,
  ];

  return (
    <div className="flex flex-col items-center max-w-md mx-auto px-4">
      <div className={`flex justify-between gap-2 absolute top-10`}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1 mb-1 ${
              index < step ? "bg-green-500" : "bg-gray-400"
            } rounded`}
          ></div>
        ))}
      </div>
      {steps[step - 1]}
    </div>
  );
};

export default OnboardSettings;
