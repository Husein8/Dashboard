import React, { createContext, useState, useContext, useEffect } from "react";

const AdminSettingsContext = createContext();

const defaultSettings = {
  isUsernameRequired: false,
  isEmailRequired: false,
  isPhoneRequired: false,
  isAddressRequired: false,
  isDateOfBirthRequired: false,
  isFirstNameRequired: false,
  isLastNameRequired: false,
  isGenderRequired: false,
  isLocationRequired: false,
  isInterestsRequired: false,
  isPhotoRequired: false,
  isBioRequired: false,
  bioMaxLength: 200,
  isFindFriendsVisible: false,
  interestsList: ["Football", "Chess", "Reading", "Traveling", "Cooking"],
};

export const AdminSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("adminSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("adminSettings", JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const setBioMaxLength = (length) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      bioMaxLength: length,
    }));
  };

  const addInterest = (interest) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      interestsList: [...prevSettings.interestsList, interest],
    }));
  };

  const removeInterest = (interest) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      interestsList: prevSettings.interestsList.filter(
        (item) => item !== interest
      ),
    }));
  };

  return (
    <AdminSettingsContext.Provider
      value={{
        settings,
        toggleSetting,
        setBioMaxLength,
        addInterest,
        removeInterest,
      }}
    >
      {children}
    </AdminSettingsContext.Provider>
  );
};

export const useAdminSettings = () => useContext(AdminSettingsContext);
