import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HeaderSidebarAdmin({ toggleSidebar, login }) {
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
    <div>
      <div className="flex items-center justify-between pl-2 py-2 bg-white">
        <div className="">
          <button onClick={toggleSidebar} className="text-xl pt-2">
            <FaBars />
          </button>
        </div>
        <div className="flex items-center gap-2 relative ">
          <div className="flex items-center gap-2 cursor-pointer text-xl pt-2 pr-5">
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
    </div>
  );
}

export default HeaderSidebarAdmin;
