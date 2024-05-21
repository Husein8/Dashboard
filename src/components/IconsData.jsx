import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaArrowCircleRight,
  FaBars,
  FaHistory,
  FaPlayCircle,
  FaUser,
} from "react-icons/fa";
import { IoMenu, IoVideocamOutline } from "react-icons/io5";
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

function IconsData({ sidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  const [showAdminContainer, setShowAdminContainer] = useState(false);

  const handleAdminClick = () => {
    setShowAdminContainer(!showAdminContainer);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="md:ml-10">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={toggleSidebar}>
            <FaBars className="text-xl" />
          </button>
        </div>
        <div className="flex items-center gap-2 mr-3">
          {!login ? (
            <span className="cursor-pointer" onClick={handleLoginClick}>
              <FaUser />
            </span>
          ) : (
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={handleAdminClick}
            >
              <FaUser className="" />
              <span className="">Admin</span>
            </div>
          )}
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
                  Profile
                </button>
                <button className="text-black px-4 py-2 rounded border hover:border-black">
                  Signout
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <h1 className="pt-6 text-3xl">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-8 md:w-10/12 lg:w-11/12 pt-8">
        {iconsData.map((item, index) => (
          <div key={index} className="flex pt-5">
            <div
              className={`container-picture flex items-center justify-center text-5xl w-20 h-20 ${item.color} text-white mr-4`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col">
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
