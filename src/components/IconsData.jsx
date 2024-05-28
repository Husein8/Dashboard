import { useState } from "react";
import { FaArrowCircleRight, FaBars, FaUser } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPlayCircle, FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const iconsData = [
  {
    icon: <AiOutlineUser className="text-white text-5xl" />,
    title: "USERS",
    count: "10",
    moreInfo: "More info",
    color: "bg",
  },
  {
    icon: <IoVideocamOutline className="text-white text-5xl" />,
    title: "POSTS",
    count: "0",
    moreInfo: "More info",
    color: "bg-red-600",
  },
  {
    icon: <FaPlayCircle className="text-white text-5xl" />,
    title: "REELS",
    count: "0",
    moreInfo: "More info",
    color: "bg-green-700",
  },
  {
    icon: <FaHistory className="text-white text-5xl" />,
    title: "STORY",
    count: "0",
    moreInfo: "More info",
    color: "bg-red-600",
  },
];

function IconsData({ sidebarOpen, toggleSidebar, login, setLogin }) {
  const navigate = useNavigate();
  const [showAdminContainer, setShowAdminContainer] = useState(false);

  const handleAdminClick = () => {
    if (!login) {
      navigate("/");
    } else {
      setShowAdminContainer(!showAdminContainer);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  // handleSettingsClick;

  const handleSettingsClick = () => {
    navigate("settings");
  };

  return (
    <div className="md:ml-2">
      <div className="flex items-center justify-between bg-white">
        <div className="py-2 bg-white">
          <button onClick={toggleSidebar} className="text-xl">
            <FaBars />
          </button>
        </div>
        <div className="flex items-center gap-2 relative bg-white">
          <div className="flex items-center gap-2 cursor-pointer text-xl">
            <FaUser onClick={handleAdminClick} />
            <span onClick={handleAdminClick}>Admin</span>
          </div>
        </div>
        {showAdminContainer ? (
          <div className="absolute top-16 right-10 md:right-5 bg-white border w-60 md:w-64  border-black shadow-lg rounded-md ">
            <div className="">
              <div className="flex flex-col items-center pt-10 bg-black text-white">
                <FaUser className="text-7xl mb-2" />
                <p>Admin</p>
                <p className="mb-6 text-sm">Member since May 2024</p>
              </div>
              <div className="flex justify-between w-full mt-3">
                <button
                  onClick={handleSettingsClick}
                  className="text-black px-4 py-2 rounded  border hover:border-black"
                >
                  Settings
                </button>
                <button
                  className="text-black px-4 py-2 rounded border hover:border-black"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <h1 className="pt-6 text-3xl mb-5 px-2">Dashboard</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-4 pl-2 py-2 border rounded-lg bg-bgMainContent">
        {iconsData.map((item, index) => (
          <div
            key={index}
            className="flex bg-iconsBg border rounded-tl rounded-bl "
          >
            <div
              className={`container-picture flex items-center justify-center text-5xl ${item.color} px-3 py-4 border rounded-tl rounded-bl`}
            >
              {item.icon}
            </div>

            <div className="flex flex-col bg-white bg-opacity-50 w-full pl-2 ">
              <span className="text-sm">{item.title}</span>
              <span className="text-base font-bold">{item.count}</span>
              <div className="flex flex-row items-center text-blue-500 gap-1">
                <span className="text-sm">{item.moreInfo}</span>
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 w-full h-0.5  bg"></div>
    </div>
  );
}

export default IconsData;
