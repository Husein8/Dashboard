import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useEffect, useState } from "react";

function Dashboard({ login, setLogin }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((sidebarOpen) => !sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 765) {
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
      <div className="w-1/10">
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          setSidebarOpen={setSidebarOpen}
          login={login}
        />
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
