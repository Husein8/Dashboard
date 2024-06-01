import React, { useState } from "react";

import TableUsersData from "./TableUsersData";
import "chart.js/auto";
import IconsData from "./IconsData";
import Charts from "./Charts";
import Footer from "./Footer";

function DashboardData({ login }) {
  return (
    <div className="w-full bg-bgMainContent">
      {login ? (
        <>
          <IconsData />
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
