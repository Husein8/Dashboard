import React from "react";
import DashboardData from "./DashboardData";

const MainContent = ({ login }) => {
  return (
    <div className="">
      <DashboardData login={login} />
    </div>
  );
};

export default MainContent;
