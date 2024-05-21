import React from "react";
import DashboardData from "./DashboardData";

const MainContent = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div>
      <DashboardData sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MainContent;
