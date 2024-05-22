import React from "react";
import DashboardData from "./DashboardData";

const MainContent = ({ sidebarOpen, toggleSidebar, login, setLogin }) => {
  return (
    <div>
      <DashboardData
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setLogin={setLogin}
        login={login}
      />
    </div>
  );
};

export default MainContent;
