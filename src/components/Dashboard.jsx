import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;
