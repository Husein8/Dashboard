import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderSidebarAdmin from "./HeaderSidebarAdmin";

const MainLayout = ({ login, setLogin }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/10 bg-opacity-20 bg-white">
        {login ? (
          <Sidebar
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            setSidebarOpen={setSidebarOpen}
            login={login}
          />
        ) : (
          ""
        )}
      </div>
      <div className="w-full bg-gray-900 bg-opacity-20">
        <HeaderSidebarAdmin toggleSidebar={toggleSidebar} login={login} />
        <div className="w-full bg-bgMainContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
