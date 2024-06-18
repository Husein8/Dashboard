import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ManageUserAppFeature = () => {
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();
  const user = users[id];

  // List of available features
  const featureList = [
    "Enable Photo post",
    "Enable Video post",
    "Enable Stories",
    "Enable Story highlights",
    "Enable Audio calling",
    "Enable Video calling",
    "Job",
    "Enable clubs",
    "Enable profile verification",
    "Enable Dark/light mode switching",
    "Enable Watch Tv",
    "Enable Podcasts",
    "Enable Reading",
    "Enable Dating",
    "Enable Live videos",
    "Enable Shorts",
    "Enable Notification",
    "Enable Sharing",
    "Enable Comments",
    "Enable Likes",
    "Enable Reactions",
    "Enable Location",
    "Enable Search",
    "Enable Messages",
    "Enable Block",
    "Enable Report",
  ];

  // Initialize state with all features set to true by default
  const defaultFeatures = featureList.reduce((acc, feature) => {
    acc[feature] = true;
    return acc;
  }, {});

  const [features, setFeatures] = useState(user.features || defaultFeatures);

  // Load features from local storage on component mount
  useEffect(() => {
    const storedFeatures = localStorage.getItem(`user-features-${id}`);
    if (storedFeatures) {
      setFeatures(JSON.parse(storedFeatures));
    }
  }, [id]);

  // Handle feature toggle
  const handleFeatureChange = (feature) => {
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
  };

  // Handle save and update local storage and context
  const handleSave = () => {
    localStorage.setItem(`user-features-${id}`, JSON.stringify(features));
    setUsers((prevUsers) => ({
      ...prevUsers,
      [id]: {
        ...prevUsers[id],
        features,
      },
    }));
    alert("Features updated successfully!");
    navigate(`/userDetails/${id}`);
  };

  return (
    <div className="p-3">
      <div className="container mx-auto p-6 bg-white">
        <h2 className="text-xl mb-6 font-medium">
          Manage Features for {user.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {featureList.map((feature) => (
            <div key={feature} className="flex items-center">
              <input
                type="checkbox"
                id={feature}
                checked={features[feature] || false}
                onChange={() => handleFeatureChange(feature)}
                className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor={feature} className="ml-2 text-sm text-black">
                {feature}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleSave}
          className="bg-buttonsColor text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ManageUserAppFeature;
