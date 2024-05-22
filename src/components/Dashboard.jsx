import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useState } from "react";

function Dashboard({ login, setLogin }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <div className="w-1/10">
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
      <div className="w-full">
        <MainContent
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          login={login}
          setLogin={setLogin}
        />
      </div>
    </div>
  );
}

export default Dashboard;
