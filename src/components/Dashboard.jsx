import React from "react";
import IconsData from "./IconsData";
import Charts from "./Charts";
import TableUsersData from "./TableUsersData";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="p-3">
      <IconsData />
      <Charts />
      <TableUsersData />
      <Footer />
    </div>
  );
}

export default Dashboard;
