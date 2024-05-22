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
    setLogin(false);
    setShowAdminContainer(false);
    navigate("/");
  };

  return (
    <div className="md:ml-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={toggleSidebar} className="text-xl p-2">
            <FaBars />
          </button>
        </div>
        <div className="flex items-center gap-2 mr-3 relative">
          <div className="flex items-center gap-2 cursor-pointer">
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
              <div className="flex justify-between w-full mt-3 ">
                <button className="text-black px-4 py-2 rounded  border hover:border-black">
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

      <h1 className="pt-6 text-3xl">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-8 md:w-10/12 lg:w-11/12 pt-6">
        {iconsData.map((item, index) => (
          <div key={index} className="flex pt-5">
            <div
              className={`container-picture flex items-center justify-center text-5xl w-32 h-20 ${item.color} text-white`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col w-full bg-gray-500 bg-opacity-10 border-b border-b-gray-800 border-opacity-5 pl-2">
              {" "}
              <span className="font-bold">{item.title}</span>
              <span className="text-gray-700">{item.count}</span>
              <div className="flex flex-row items-center text-blue-500 gap-1">
                <span className="text-xs">{item.moreInfo}</span>
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
