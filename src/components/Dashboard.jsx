import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

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
