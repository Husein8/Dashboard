import React, { useState } from "react";

import TableUsersData from "./TableUsersData";
import "chart.js/auto";
import IconsData from "./IconsData";
import Charts from "./Charts";
import Footer from "./Footer";

function DashboardData({ sidebarOpen, toggleSidebar, login, setLogin }) {
  // const [tooltipData, setTooltipData] = useState(null);
  const [showContent, setShowContent] = useState(true);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      const position = { x: payload[0].cx, y: payload[0].cy - 20 }; // Adjust y offset as needed

      return (
        <div
          className="custom-tooltip flex items-center justify-center rounded-lg w-20 h-10 text-white bg-slate-800"
          style={{ left: position.x, top: position.y }}
        >
          <p className="label">{`${label} : ${value}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipLineChart = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 text-white p-2 rounded">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipMixBarChart = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-800 text-white p-2 rounded">
          <p>{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full pt-6 px-3">
      <IconsData
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        login={login}
        setLogin={setLogin}
      />
      {login ? (
        <>
          <Charts />
          <TableUsersData />
          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashboardData;
