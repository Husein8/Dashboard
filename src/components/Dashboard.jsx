import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useState } from "react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <div className="w-1/10">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="w-full">
        <MainContent sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default Dashboard;
