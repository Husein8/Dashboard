import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-1/10">
        <Sidebar />
      </div>
      <div className="w-full">
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;
